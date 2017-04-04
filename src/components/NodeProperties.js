import React from 'react'
import NodePath from './NodePath'
import NodeTabs from './NodeTabs'
import HeaderWithActions from './HeaderWithActions'
import NodeActions from './NodeActions'
import NodePropertiesForm from './NodePropertiesForm'

export default ({components, componentId, nodeId}) => {

  const component = components[componentId]

  if(!component) return null

  const { nodes = [] } = component.data

  // Get the node we want to display
  const node = nodes.find( node => node.__id === (nodeId || component.data.properties.node) )

  return (
    <div>

      <HeaderWithActions
        heading={<NodePath components={components} component={component} node={node} />}
        actions={<NodeActions component={component} node={node} />} />

      <NodeTabs components={components} component={component} node={node} activeField="_properties" />

      <NodePropertiesForm components={components} component={component} node={node} />

    </div>
  )
}
