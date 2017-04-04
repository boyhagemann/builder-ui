import React, { Component } from 'react'
import styled from 'styled-components'

const Container =  styled.div`
  position: relative;
  border: none;
`

const Content =  styled.div`
  position: absolute;
  top: 100%;
  left: 0;
`


class ToggableContainer extends Component
{

  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  handleToggle() {
    console.log(this.state.visible)
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {

    return <Container>

      <div onClick={this.handleToggle.bind(this)}>
        {this.state.visible ? this.props.close : this.props.open }
      </div>

      { this.state.visible ? <Content>{this.props.content}</Content> : null }

    </Container>
  }
}

export default ToggableContainer
