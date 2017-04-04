import React from 'react'
import NodeTabs from './NodeTabs'
import NodePath from './NodePath'
import HeaderWithActions from './HeaderWithActions'
import NodeActions from './NodeActions'
import NodeChild from './NodeChild'
import ButtonLink from './ButtonLink'
import styled from 'styled-components'
import { firstCollectionField, findNodes } from '../helpers'

export default ({components, componentId, nodeId, fieldId}) => {

  const component = components[componentId]

  if(!component) return null

  const { nodes = [] } = component.data

  // Get the node we want to display
  const node = nodes.find( node => node.__id === (nodeId || component.data.properties.node) )

  if(!node) return <div>No root node found...</div>

  // Get the content type component
  const type = components[node.type]

  if(!type) {
    return <div>Loading related components...</div>
  }

  // Get the first content field to show
  const firstField = firstCollectionField(type, node)

  // Get the current field
  const field = fieldId || firstField


    // Extract nodes and edges
    const { edges = [] } = component.data

    const Child = styled.div`
      padding: ${ props => props.theme.spacing.default }px 0;
    `

    // Find the child nodes
    const children = findNodes(nodes, edges, node.__id, field)
      .map( node => (
        <div key={ "child_" + node.__id }>
          <NodeChild components={components} component={component} node={node} />
        </div>
      ))

  return (
    <div>

      <HeaderWithActions
        heading={<NodePath components={components} component={component} node={node} />}
        actions={<NodeActions component={component} node={node} />} />

      <NodeTabs components={components} component={component} node={node} activeField={field} />

      { children
        ? <Child>{ children }</Child>
        : <div>No content yet...</div>
      }

      <ButtonLink to="/" label="Add content" color="primary" size="large" />
    </div>
  )
}
