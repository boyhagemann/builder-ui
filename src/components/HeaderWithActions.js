import React from 'react'
import styled from 'styled-components'

const Heading = styled.div`
  display: inline-block;
  width: 75%;
`

const Actions = styled.div`
  display: inline-block;
  width: 25%;
  text-align: right;
`

export default ({heading, actions}) => (
  <div>
    <Heading>{ heading }</Heading>
    <Actions>{ actions }</Actions>
  </div>
)
