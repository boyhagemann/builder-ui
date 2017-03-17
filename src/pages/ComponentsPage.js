import React, { Component } from 'react'
import { connect } from 'react-redux'
import ComponentList from '../components/ComponentList'
import { fetchComponents } from '../ducks/components'


class ComponentsPage extends Component {

  componentDidMount() {
    this.props.components.length || this.props.fetchComponents()
  }

  render() {
    return this.props.loading
      ? <div>Loading...</div>
      : <ComponentList components={this.props.components} />
  }

}

const mapStateToProps = state => ({...state.components})
const mapDispatchToProps = dispatch => ({
  fetchComponents: () => {
    dispatch(fetchComponents())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsPage)
