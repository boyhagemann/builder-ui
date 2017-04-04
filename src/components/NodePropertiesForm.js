import React from 'react'
import { findValue } from '../helpers'
import FormRow from './FormRow'
import Button from './Button'
import FormTextInput from './FormTextInput'
import Form from './Form'

export default ({components, component, node}) => {

  const { nodes = [], edges = [] } = component.data

  const type = components[node.type]

  if(!type) return null

  const { fields = [] } = type.data

  const renderField = field => {

    const value = findValue(nodes, edges, node, field)

    if(field.accepts.includes('String')) {
      return <FormTextInput value={value} />
    }

    if(field.accepts.includes('Text')) {
      return <textarea defaultValue={value} />
    }

    return <div>Missed field: { field.__id }</div>
  }

  const renderRow = field => (
    <FormRow
      key={field.__id}
      label={field.label}
      element={renderField(field)}
      description={field.description} />
  )

  const form = fields
    .filter( field => field.collection === false)
    .map(renderRow)

  form.unshift(<FormRow
    key="node.label"
    element={<FormTextInput value={node.label} />}
    label="Administrative title"
    description="Enter a title for this node." />)

  return (
    <Form
      elements={form}
      actions={(
      <Button size="large" color="primary" handleClick={ () => {
        console.log('handled')
      }}>Save</Button>
    )} />
  )
}
