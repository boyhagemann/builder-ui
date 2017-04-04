import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled(Link)`
  display: inline-block;
  padding: ${ props => props.theme.spacing[props['data-spacing']] / 1.5 }px;
  font-size: ${ props => props.theme.font.size[props['data-spacing']] }px;
  color: ${ props => props.theme.color[props['data-color']].text };
  background: ${ props => props.theme.color[props['data-color']].default };
  border: none;
  text-decoration: none;
`

export default ({label, to, color = 'neutral', size = 'default'}) => (
  <Button
    data-color={color}
    data-spacing={size}
    to={to}>{label}</Button>
)
