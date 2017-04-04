import React, { Component } from 'react'
import Link from './Link'
import styled from 'styled-components'
import { pathToComponent } from '../helpers'
import Overlay from './Overlay'
import Button from './Button'

const Container = styled.div`
  background: #fff;
  padding: ${ props => props.theme.spacing[props['data-spacing']] }px;
`

class NodeActions extends Component {

  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  render () {
    return (
      <div>

        <Button onClick={ this.show.bind(this) }>Actions...</Button>

        <Overlay onBackgroundClick={ this.hide.bind(this) } visible={this.state.visible}>
          <Container data-color="canvas" data-spacing="default">
            <Link to={pathToComponent(this.props.node.type)}>Go to original component</Link>
          </Container>
        </Overlay>

      </div>
    )
  }

}


export default NodeActions
