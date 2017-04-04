import React from 'react'
import Link from './Link'
import Breadcrumbs from './Breadcrumbs'
import { pathToNodeContent, edgePath } from '../helpers'


export default ({components, component, node}) => {

  // Extract nodes and edges
  const { nodes = [], edges = [] } = component.data

  if(!node) return null
  
  // Create a breadcrumb path
  const path = edgePath(nodes, edges, node.__id)
    .map( edge => {

      const node = nodes.find( node => node.__id === edge.from )
      const type = components[node.type]

      if(!type) return null

      const field = type.data.fields.find( field => field.__id === edge.thru )

      return (<Link
        key={node.__id}
        to={pathToNodeContent(component._id, node.__id, field ? field.__id : null)}
      >{ node.label || node.__id } </Link>)
    })

  return (
    <Breadcrumbs items={path} current={node.label || node.__id} />
  )
}
