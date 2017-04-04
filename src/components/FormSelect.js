import React from 'react'
import styled from 'styled-components'

const Textarea = styled.textarea`
  padding: ${ props => props.theme.spacing.small }px;
  font-family: ${ props => props.theme.font.family.default }
  font-size: ${ props => props.theme.font.size.default }px;
  width: 100%;
  border: 1px solid ${ props => props.theme.color.neutral.strong };
`

export default ({value}) => (
  <Textarea rows="5" defaultValue={value} />
)
