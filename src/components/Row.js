import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import { theme } from '../helpers'

const Row =  styled.div`
  background: ${ props => theme(props, ['color', 'canvas', props.level]) };
  padding: ${ props => theme(props, 'spacing.default') }px;
  margin-bottom: ${ props => theme(props, 'spacing.tiny') }px;
`

const Heading = styled.h2`
  margin: 0 0 ${ props => theme(props, 'spacing.small') }px;
  font-size: ${ props => theme(props, 'font.size.default') }px;
`

const Description = styled.p`
  margin: ${ props => theme(props, 'spacing.small') }px 0 0;
  font-size: ${ props => theme(props, 'font.size.small') }px;
  color: ${ props => theme(props, 'color.neutral.strong') };
`

const Content = styled.div`
  display: inline-block;
  width: 75%;
  padding: ${ props => theme(props, 'spacing.small') }px 0;
`

const Actions = styled.div`
  display: inline-block;
  float: right;
`


export default ({heading, to, children, description, actions, level = 'highlight'}) => (
  <Row level={level}>
    <Content>
      { heading ? <Heading>{ to ? <Link to={to}>{heading}</Link> : heading }</Heading> : null }
      {children}
      { description ? <Description>{description}</Description> : null }
    </Content>
    <Actions>{actions}</Actions>
  </Row>
)
