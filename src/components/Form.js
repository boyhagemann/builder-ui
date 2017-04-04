import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: ${ props => props.theme.spacing.default }px 0;
`

const Actions = styled.div`
  padding: ${ props => props.theme.spacing.large }px 0;
`

export default ({children, actions}) => {

    return (
      <Container>
        {children}
        { actions ? <Actions>{actions}</Actions> : null }
      </Container>
    )

}
