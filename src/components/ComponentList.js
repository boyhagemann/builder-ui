import React from 'react'
import ButtonLink from './ButtonLink'
import Row from './Row'
import CenteredContainer from './CenteredContainer'
import { pathToComponent, pathToNodeContent } from '../helpers'

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
    <h3>Components</h3>
    { components.map(renderComponentRow) }
  </CenteredContainer>
)
