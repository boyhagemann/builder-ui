import React from 'react'
import { connect } from 'react-redux'
import FieldList from './FieldList'


const FieldListContainer = ({components, match}) => {

  // const component = components.find( component => component._id === match.params.id )
  const component = components[match.params.id]

  if(!component || !component.data) return null

  return <FieldList component={component} />
}

const mapStateToProps = state => ({...state.componentWorkspace})

export default connect(mapStateToProps)(FieldListContainer)
