import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Centered from './CenteredContainer'

const Container = styled.div`
  background: #444;
`

const NavLink = styled(Link)`
  color: ${ props => props['data-active'] ? '#fff' : '#aaa'};
  display: inline-block;
  padding: 15px;
  text-decoration: none;
`

export default ({match}) => {

  const active = match.params.part || ''

  return (<Container>
    <Centered>
      <NavLink to={"/"} data-active={ active === '' }>Home</NavLink>
      <NavLink to={"/components"} data-active={ active === 'components'}>Components</NavLink>
    </Centered>
  </Container>)
}
