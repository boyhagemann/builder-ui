import React from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import Row from './Row'
import CenteredContainer from './CenteredContainer'
import Heading from '../components/Heading'
import { pathToComponent, pathToNodeContent } from '../helpers'

const Content = styled.div`
  padding: ${ props => props.theme.spacing.default }px;
`

const renderComponentRow = component => (
  <Row
    key={component._id}
    heading={component.label}
    to={pathToComponent(component._id)}
    description={ component.uses.join(', ') }
    actions={(
      <ButtonLink to={pathToNodeContent(component._id)} label="Content" size="small" />
    )} />
)

export default ({components}) => (
  <CenteredContainer>
    <Content>
      <Heading>Components</Heading>
      { components.map(renderComponentRow) }
    </Content>
  </CenteredContainer>
)
