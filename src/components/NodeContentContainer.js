import React from 'react'
import { connect } from 'react-redux'
import NodeContent from './NodeContent'


const NodeContentContainer = ({components, match}) => (
  <NodeContent
    components={components}
    componentId={match.params.id}
    nodeId={match.params.node}
    fieldId={match.params.field} />
)

const mapStateToProps = state => ({...state.componentWorkspace})

export default connect(mapStateToProps)(NodeContentContainer)
