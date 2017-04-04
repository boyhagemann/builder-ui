import React from 'react'
import { connect } from 'react-redux'
import ComponentProperties from './ComponentProperties'


const ComponentPropertiesContainer = ({components, match}) => {

  const component = components[match.params.id]

  return <ComponentProperties component={component} />
}

const mapStateToProps = state => ({...state.componentWorkspace})

export default connect(mapStateToProps)(ComponentPropertiesContainer)
