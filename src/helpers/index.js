

export const findNodes = (nodes = [], edges = [], parent, thru) => {

  console.log(parent, thru, edges)
  return edges
    .filter( edge => edge.thru === thru && edge.from === parent )
    .map( edge => nodes.find( node => node.__id === edge.to ) )
}

export const firstCollectionField = fields => fields.find( field => field.collection)
