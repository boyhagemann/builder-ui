import Immutable from 'immutable'
import defaultTheme from '../themes/default'

export const findNodes = (nodes = [], edges = [], parent, thru) => {
  return edges
    .filter( edge => edge.thru === thru && edge.from === parent )
    .map( edge => nodes.find( node => node.__id === edge.to ) )
}

export const firstCollectionField = component => {

    const { fields = [] } = component.data
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

export const pathToNodeContent = (component, node = null, field = null) => "/components/" + component + "/nodes" + (node ? "/" + node : "" ) + (field ? "/" + field : "")
export const pathToNodeProperties = (component, node) => "/components/" + component + "/nodes/" + node
export const pathToComponent = (component) => "/components/" + component + "/dashboard"
export const pathToComponentProperties = (component) => "/components/" + component + "/properties"
export const pathToComponentCreate = () => "/components/create"
export const pathToFields = (component) => "/components/" + component + "/fields"
export const pathToFieldProperties = (component, field) => "/components/" + component + "/fields/" + field


export const findValue = (nodes, edges, node, field) => {

    const edge = edges.find( edge => edge.from === node.__id && edge.thru === field.__id )

    if(!edge) return field.default

    const valueNode = nodes.find( node => node.__id === edge.to )

    return valueNode.value
}

/**
 * Get the right value from a theme config object
 **/
export const theme = (props, path, modify) => {

  const pathArray = (typeof(path) === 'string')
    ? path.split('.')
    : path

  const value = Immutable
    .fromJS(defaultTheme)
    .merge(props.theme)
    .getIn(pathArray)

  return modify ? modify(value) : value
}
