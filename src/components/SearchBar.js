import React from 'react'
import styled from 'styled-components'
import MdClear from 'react-icons/lib/md/clear'

import FormTextInput from './FormTextInput'


const Container = styled.div`
  position: relative;
  padding: ${ props => props.theme.spacing.default }px 0;
`

const Clear = styled.div`
  position: absolute;
  right: 10px;
  font-size: 20px;
  top: 27px;
`

export default ({ query, placeholder = 'Search...', onChange, onClear }) => (
  <Container>

    <FormTextInput
      value={query}
      placeholder={placeholder}
      onChange={onChange}
      size="large" />

    <Clear onClick={onClear}><MdClear /></Clear>

  </Container>
)
