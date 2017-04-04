import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchComponent } from '../ducks/component'
import styled, { ThemeProvider } from 'styled-components'
import Centered from './CenteredContainer'
import Color from 'color'
import Tabs from './Tabs'
import Heading from './Heading'
import { pathToComponent, pathToComponentProperties, pathToFields, pathToNodeContent } from '../helpers'
import MdDashboard from 'react-icons/lib/md/dashboard'
import MdBuild from 'react-icons/lib/md/build'
import MdWeb from 'react-icons/lib/md/web'
import MdStorage from 'react-icons/lib/md/storage'

const Container = styled.div`
  background: ${ props => props.theme.color.canvas.default };
  padding-left: ${ props => props.theme.spacing.default }px;
  padding-right: ${ props => props.theme.spacing.default }px;
  color: ${ props => props.theme.color.canvas.text };
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

class ComponentPage extends Component {

  componentDidMount() {
    this.props.components.length || this.props.fetchComponent(this.props.match.params.id)
  }

  render() {

    const { id, topic = "dashboard" } = this.props.match.params

    const component = this.props.components[id]

    // Nothing to do if the component is not there
    if(!component) return null

    const links = [
      {
        key: "dashboard",
        to: pathToComponent(id),
        label: "Dashboard",
        icon: <MdDashboard />
      },
      {
        key: "properties",
        to: pathToComponentProperties(id),
        label: "Properties",
        icon: <MdBuild />
      },
      {
        key: "nodes",
        to: pathToNodeContent(id),
        label: "Content",
        icon: <MdWeb />
      },
      {
        key: "fields",
        to: pathToFields(id),
        label: "Fields",
        icon: <MdStorage />
      },
    ]

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
          </div>
      )
      : <div>Loading...</div>
  }
}

const mapStateToProps = state => ({...state.componentWorkspace})
const mapDispatchToProps = dispatch => ({
  fetchComponent: (id) => {
    dispatch(fetchComponent(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentPage)
