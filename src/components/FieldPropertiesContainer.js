import React from 'react'
import { connect } from 'react-redux'
import FieldProperties from './FieldProperties'


const FieldPropertiesContainer = ({components, match}) => {

  const component = components[match.params.id]

  if(!component) return null

  const field = component.data.fields.find( field => field.__id === match.params.field )

  return <FieldProperties component={component} field={field} />
}

const mapStateToProps = state => ({...state.componentWorkspace})

export default connect(mapStateToProps)(FieldPropertiesContainer)
