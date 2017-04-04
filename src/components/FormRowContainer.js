import React from 'react'
import FormRow from './FormRow'
import { connect } from 'react-redux'
import { updateWorkspace } from '../ducks/workspace'

const mapStateToProps = state => ({
  values: state.workspace
})

const mapDispatchToProps = dispatch => ({
  onChange: e => {
    dispatch(updateWorkspace(e.target.name, e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FormRow)
