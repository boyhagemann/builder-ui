import { connect } from 'react-redux'

export const findNodes = (nodes = [], edges = [], parent, thru) => {
  return edges
    .filter( edge => edge.thru === thru && edge.from === parent )
    .map( edge => nodes.find( node => node.__id === edge.to ) )
}

export const firstCollectionField = (components, node) => {

    const type = components.find( component => component._id === node.type)
    const { fields = [] } = type.data
    const field = fields.find( field => field.collection === true)

    return field ? field.__id : null
  }

/**
 * Get all parent edges
 */
export const edgePath = (nodes = [], edges = [], nodeId, path = []) => {

  const edge = edges.find( edge => edge.to === nodeId)

  if(edge) {

    path.unshift(edge)

    return edgePath(nodes, edges, edge.from, path)
  }

  return path
}

export const pathToNodeContent = (component, node, field = null) => "/components/" + component + "/nodes/" + node + (field ? "/" + field : "")
export const pathToNodeProperties = (component, node) => "/components/" + component + "/nodes/" + node
export const pathToComponent = (component) => "/components/" + component
export const pathToFields = (component) => "/components/" + component + "/fields"
export const pathToFieldProperties = (component, field) => "/components/" + component + "/fields/" + field


export const findValue = (nodes, edges, node, field) => {

    const edge = edges.find( edge => edge.from === node.__id && edge.thru === field.__id )

    if(!edge) return field.default

    const valueNode = nodes.find( node => node.__id === edge.to )

    return valueNode.value
}
