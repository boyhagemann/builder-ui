import React from 'react'
import Row from './Row'
import ButtonLink from './ButtonLink'
import styled from 'styled-components'
import { pathToFieldProperties } from '../helpers'

const Container = styled.div`
`

export default ({component}) => {

  const { fields = [] } = component.data

  const renderField = field => (
    <Row
      key={field.__id}
      heading={field.label}
      to={pathToFieldProperties(component._id, field.__id)}
      description={field.accepts.join(', ')}
      actions={(
        <div>
        <ButtonLink
          to={pathToFieldProperties(component._id, field.__id)}
          label="Edit"
          size="small" />
        <ButtonLink
          to={pathToFieldProperties(component._id, field.__id)}
          label="Delete"
          color="negative"
          size="small" />
          </div>
      )}>
    {field.description}
    </Row>
  )

  return (<Container>
    {fields.map(renderField)}
  </Container>)
}
