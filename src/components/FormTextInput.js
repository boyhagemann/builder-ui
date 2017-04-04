import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from '../helpers'

const Input = styled.input`
  box-sizing: border-box;
  padding: ${ props => theme(props, ['spacing', props.size || 'default']) / 2 }px;
  font-family: ${ props => theme(props, 'font.family.default') };
  font-size: ${ props => theme(props, ['font', 'size', props.size || 'default']) }px;
  color: ${ props => theme(props, 'color.neutral.text') };
  width: 100%;
  border: 1px solid ${ props => theme(props, 'color.neutral.strong') };
`

Input.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['default', 'small', 'large']),
  defaultValue: PropTypes.string,
}

Input.defaultProps = {
  type: 'text'
}

export default Input
