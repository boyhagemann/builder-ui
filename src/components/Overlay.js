import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`
const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: black;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  z-index: 100;
`
const Content = styled.div`
  position: fixed;
  left: 50%;
  top: { props => props.top }px;
  z-index: 200;
  margin-left: ${ props => - props.width / 2 }px;
  width: ${ props => props.width }px;
  text-align: left;
`

// injectGlobal([`
//
//   body > *:not(.loader) {
//
//     -webkit-filter: blur(5px);
//     -moz-filter: blur(5px);
//     filter: blur(5px);
//
//   }
// `])


export default ({ visible = false, children, onBackgroundClick = () => {}, top = 200, width = 500 }) => {

  return visible ? (<Container>
    <Background onClick={onBackgroundClick} />
    <Content top={top} width={width}>{ children }</Content>
  </Container>) : null
}
