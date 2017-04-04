import { connect } from 'react-redux'
import ComponentCreate from './ComponentCreate'
import { updateWorkspace, setWorkspace } from '../ducks/workspace'
import { createComponent } from '../ducks/component'

const mapStateToProps = state => ({...state.componentWorkspace})
const mapDispatchToProps = dispatch => {
  return {
    setWorkspace: values => {
      dispatch(setWorkspace(values))
    },
    updateWorkspace: e => {
      dispatch(updateWorkspace(e.target.name, e.target.value))
    },
    createComponent: () => {
      dispatch(createComponent)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentCreate)
