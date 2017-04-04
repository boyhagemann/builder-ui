import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: inline-block;
  margin-top: ${ props => props.theme.spacing.default }px;
`

const Tab = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: ${ props => props.theme.color[props.color].text };
  background: ${ props => props['data-active']
    ? props.theme.color[props.color].highlight
    : props.theme.color[props.color].default
  };
  padding: ${ props => props.theme.spacing.default }px;
  margin-right: ${ props => props.theme.spacing.tiny }px;
`

const Icon = styled.span`
  opacity: 0.5;
  margin-right: 5px;
`

const renderTab = (props, active, color, icon) => (
  <Tab {...props} data-active={active === props.key} color={color}>
  { props.icon ? <Icon>{props.icon}</Icon> : null }
    {props.label}
  </Tab>
)

export default ({items = [], active, color = 'neutral'}) => (
  <Container>
    { items.map( item => renderTab(item, active, color) ) }
  </Container>
)
