import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: ${ props => props.width || props.theme.width }px
`

export default ({children, width}) => (
  <Container width={width}>{children}</Container>
)
