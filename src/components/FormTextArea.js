import React from 'react'
import styled from 'styled-components'

const Select = styled.select`
  padding: ${ props => props.theme.spacing.small }px;
  font-family: ${ props => props.theme.font.family.default }
  font-size: ${ props => props.theme.font.size.default }px;
  width: 100%;
  border: 1px solid ${ props => props.theme.color.neutral.strong };
`

const Option = styled.option`
`

export default ({name, value, choices = [], onChange}) => (
  <Select rows="5" name={name} defaultValue={value} onChange={onChange}>
  { choices.map( (label, key) => <Option name={key}>{label}</Option>)}
  </Select>
)
