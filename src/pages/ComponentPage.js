import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Tabs from '../components/Tabs'
import { fetchComponents } from '../ducks/components'
import styled, { ThemeProvider } from 'styled-components'
import Centered from '../components/CenteredContainer'
import Color from 'color'
import ComponentFields from '../components/ComponentFields'
import NodeProperties from '../components/NodeProperties'
import NodeContent from '../components/NodeContent'

const Container = styled.div`
  background: ${ props => props.theme.color.canvas.default };
  padding-left: ${ props => props.theme.spacing.default };
  padding-right: ${ props => props.theme.spacing.default };
  color: ${ props => props.theme.color.canvas.text };
`

const Heading = styled.h2`
  margin: 0;
  padding: 30px 0;
  font-weight: normal;
  font-size: ${ props => props.theme.font.size.large };
`

const darkTheme = {
  color: {
    canvas: {
      default: "#1E88E5",
      text: "#fff",
    },
    neutral: {
      default: Color('#1E88E5').lighten(0.2).string(),
      highlight: Color('#1E88E5').lighten(0.4).string(),
      text: '#fff'
    }
  }
}

const Content = styled.div`
  padding: ${ props => props.theme.spacing.large };
`

class ComponentPage extends Component {

  componentDidMount() {
    this.props.components.length || this.props.fetchComponents()
  }

  render() {

    const { id, topic = "dashboard" } = this.props.match.params
    const component = this.props.components.find( component => component._id === id )

    // Nothing to do if the component is not there
    if(!component) return null

    const params = this.props.match.params

    const links = [
      {
        key: "dashboard",
        to: "/components/" + id,
        label: "Dashboard",
      },
      {
        key: "properties",
        to: "/components/" + id + "/properties",
        label: "Properties",
      },
      {
        key: "nodes",
        to: "/components/" + id + "/nodes",
        label: "Content",
      },
      {
        key: "fields",
        to: "/components/" + id + "/fields",
        label: "Fields",
      },
    ]

    const renderDashboard = () => (
      <div>dashboard</div>
    )

    const renderFields = component => () => (
      <ComponentFields component={component} />
    )

    const renderNodeProperties = () => (
      <NodeProperties
        components={this.props.components}
        componentId={params.id}
        nodeId={params.node} />
    )

    const renderNodeContent = () => (
      <NodeContent
        components={this.props.components}
        componentId={params.id}
        nodeId={params.node}
        fieldid={params.field} />
    )

    return component.data
      ? (
          <div>
            <ThemeProvider theme={darkTheme}>
              <Container>
                <Centered>
                    <Heading>{ component.label }</Heading>
                    <Tabs items={links} keyName="key" active={topic} />
                </Centered>
              </Container>
            </ThemeProvider>

            <Content>
              <Centered>
                <Switch>
                  <Route exact path="/components/:id" component={renderDashboard} />
                  <Route exact path="/components/:id/fields" component={renderFields(component)} />
                  <Route exact path="/components/:id/nodes/:node" component={renderNodeProperties} />
                  <Route path="/components/:id/nodes/:node?/:field?" component={renderNodeContent} />
                </Switch>
              </Centered>
            </Content>

          </div>
      )
      : <div>Loading...</div>
  }
}

const mapStateToProps = state => ({...state.components})
const mapDispatchToProps = dispatch => ({
  fetchComponents: () => {
    dispatch(fetchComponents())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPage)
