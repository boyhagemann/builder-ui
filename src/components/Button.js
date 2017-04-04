import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { theme } from '../helpers'

const Button = styled.button`
  display: inline-block;
  padding: ${ props => theme(props, ['spacing', props.size || 'default']) }px;
  font-size: ${ props => theme(props, ['font', 'size', props.size || 'default']) }px;
  color: ${ props => theme(props, ['color', props.level || 'default', 'text']) };
  background: ${ props => theme(props, ['color', props.level || 'default', 'default']) };
  border: none;
  text-decoration: none;
  cursor: pointer;
`

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['default', 'tiny', 'small', 'large', 'huge']),
  level: PropTypes.oneOf(['default', 'primary', 'secondary']),
}

Button.defaultProps = {
  type: 'button'
}

export default Button
