import React from 'react'
import { connect } from 'react-redux'
import NodeProperties from './NodeProperties'


const NodePropertiesContainer = ({components, match}) => (
  <NodeProperties
    components={components}
    componentId={match.params.id}
    nodeId={match.params.node}
    fieldId={match.params.field} />
)

const mapStateToProps = state => ({...state.componentWorkspace})

export default connect(mapStateToProps)(NodePropertiesContainer)
