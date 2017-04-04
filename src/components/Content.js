import React from 'react'
import styled from 'styled-components'
import Centered from './CenteredContainer'

const Content = styled.div`
  padding: ${ props => props.theme.spacing.default }px;
`

export default ({children }) => (
  <Content>
    <Centered>{children}</Centered>
  </Content>
)
