import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
`

export default ({value}) => (
  <Input type="checkbox" defaultChecked={value} />
)
