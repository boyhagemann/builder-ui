import React from 'react'
import styled from 'styled-components'
import ButtonLink from './ButtonLink'
import Row from './Row'
import CenteredContainer from './CenteredContainer'
import Heading from './Heading'
import HeaderWithActions from './HeaderWithActions'
import SearchBar from './SearchBar'
import { pathToComponent, pathToNodeContent, pathToComponentCreate } from '../helpers'

const Content = styled.div`
  padding: ${ props => props.theme.spacing.default }px;
`

const LoadingWrapper = styled.div`
  opacity: ${ props => props.loading ? 0.5 : 1};
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


export default ({components, params, updateQuery, loading }) => (
  <CenteredContainer>
    <Content>
      <HeaderWithActions
        heading={<Heading>Components</Heading>}
        actions={<ButtonLink
        to={pathToComponentCreate()}
        label="Create new component"
        color="primary" />} />
        
      <SearchBar
        query={params.q}
        onChange={ e => updateQuery(e.target.value) }
        onClear={ () => updateQuery('')} />

      <LoadingWrapper loading={loading}>
        { components.length ? components.map(renderComponentRow) : <div>No components found</div> }
      </LoadingWrapper>
    </Content>
  </CenteredContainer>
)
