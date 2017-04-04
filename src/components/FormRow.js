import React from 'react'
import styled from 'styled-components'
import Row from './Row'
import FormTextInput from './FormTextInput'
import { theme } from '../helpers'

const Message = styled.div`
  color: ${ props => theme(props, ['color', props.level || 'neutral', 'default']) };
  background: ${ props => theme(props, ['color', props.level || 'neutral', 'faded']) };
  font-size: ${ props => theme(props, 'font.size.small') }px;
  padding: ${ props => theme(props, 'spacing.small') }px;
  margin: ${ props => theme(props, 'spacing.tiny') }px 0;
`

const renderError = (error, i) => (
  <Message key={i} level="negative">{ error }</Message>
)

export default ({element, name, label, description, value, errors = [], onChange}) => {

 return (
  <Row
    heading={label}
    description={description}
    colorModifier="offset">
    { element }
    { errors ? errors.map(renderError) : null }
  </Row>
)}
