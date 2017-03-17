import React from 'react'
import { Link } from 'react-router-dom'
import { findNodes, firstCollectionField } from '../helpers'

export default ({components, match}) => {

  const id = match.params.id
  const component = components.find( component => component._id === id )

  const { nodes = [], edges = [] } = component.data

  // Get the node we want to display
  const node = nodes.find( node => node.__id === (match.params.node || component.data.properties.node) )

  // Find the component type for this node
  const type = components.find( component => component._id === node.type )

  const { properties, fields = [] } = type.data

  // Build the node content links
  const links = fields
    .filter( field => field.collection )
    .map( field => <Link key={field.__id} to={ "/components/" + component._id + "/nodes/" + node.__id + "/" + field.__id }>{ field.label }</Link> )


  // Get the first collection field
  const field = match.params.field || firstCollectionField(fields).__id


  // Find the child nodes
  const children = findNodes(nodes, edges, node.__id, field)
    .map( node => (
      <div key={ node.__id }>
        <Link to={ "/components/" + component._id + "/nodes/" + node.__id }>{ node.label } ({ node.type })</Link>
      </div>
    ))

  return (
    <div>
      <h1>{ component.label }</h1>

      { links }

      { children }

    </div>
  )
}
