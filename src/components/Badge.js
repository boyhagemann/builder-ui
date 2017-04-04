import React from 'react'
import styled from 'styled-components'

const Badge =  styled.span`
  background: ${ props => props.theme.color[props['data-color']].default };
  color: ${ props => props.theme.color[props['data-color']].text };
  padding: 0 ${ props => props.theme.spacing.tiny }px;
  margin: 0 ${ props => props.theme.spacing.tiny }px;
`

export default ({text, color }) => (
  <Badge data-color={color}>{text}</Badge>
)
