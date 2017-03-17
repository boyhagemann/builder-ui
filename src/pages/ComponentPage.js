import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchComponents } from '../ducks/components'


class ComponentPage extends Component {

  componentDidMount() {
    this.props.components.length || this.props.fetchComponents()
  }

  render() {

    const id = this.props.match.params.id
    const component = this.props.components.find( component => component._id === id )

    return component && component.data
      ? (
        <div>
          <h2>{ component.label}</h2>
          <Link to={ "/components/" + id + "/nodes" }>Nodes</Link>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPage)
