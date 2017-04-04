import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: ${ props => props.theme.spacing.default }px 0;
`

const Wrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
`

const renderItem = (item, key, connector = true) => (
  <Wrapper key={key}>
    { item }
    { connector ? " > " : null }
  </Wrapper>
)

export default ({items = [], current}) => (
  <Container>
    { items.map(renderItem) }
    { renderItem(current, 'current', false)}
  </Container>
)
