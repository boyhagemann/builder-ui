import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentList from './ComponentList'
import { fetchComponents, updateQuery } from '../ducks/components'


class ComponentsPage extends Component {

  componentDidMount() {
    this.props.components.length || this.props.fetchComponents()
  }

  render() { 
    return <ComponentList {...this.props} />
  }

}

const mapStateToProps = state => ({...state.components})
const mapDispatchToProps = dispatch => ({
  fetchComponents: () => {
    dispatch(fetchComponents())
  },
  updateQuery: q => {
    dispatch(updateQuery(q))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsPage)
