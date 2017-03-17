import React, { Component } from 'react'
import { connect } from 'react-redux'
import NodeList from '../components/NodeList'
import { fetchComponents } from '../ducks/components'


class NodesPage extends Component {

  componentDidMount() {
    this.props.components.length || this.props.fetchComponents()
  }

  render() {

    const id = this.props.match.params.id
    const component = this.props.components.find( component => component._id === id )

    return component && component.data
      ? (
        <NodeList {...this.props} />
      )
      : <div>Loading...</div>
  }
}

const mapStateToProps = state => ({...state.components})
const mapDispatchToProps = dispatch => ({
  fetchComponents: () => {
    dispatch(fetchComponents())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NodesPage)
