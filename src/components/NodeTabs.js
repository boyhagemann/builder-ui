import React from 'react'
import Tabs from './Tabs'
import Badge from './Badge'
import { pathToNodeContent, pathToNodeProperties } from '../helpers'

export default ({components, component, node, activeField }) => {

  // Find the component type for this node
  const type = components[node.type]

  if(!type) return null

  // Get the fields of the current node component
  const { fields = [] } = type.data

  const { edges = [] } = component.data

  // These are the fields that need to be tabs
  const collectionFields = fields
    .filter( field => field.collection === true )

  const renderLabel = (field) => {

      const count = edges.filter( edge => edge.thru === field.__id && edge.from === node.__id ).length

      return (<span>
        {field.label}
        <Badge color="offset" text={count} />
      </span>)
    }

  // Build the node content tabs
  const tabs = collectionFields
    .map( field => {
      return {
        key: field.__id,
        to: pathToNodeContent(component._id, node.__id, field.__id),
        label: renderLabel(field)
      }
    })

  // Add the properties link
  tabs.unshift({
    key: "_properties",
    to: pathToNodeProperties(component._id, node.__id),
    label: "Properties"
  })

  return (
    <Tabs items={ tabs } active={activeField} color="neutral" />
  )
}
