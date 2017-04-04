import React, { Component } from 'react'
import Heading from './Heading'
import ComponentProperties from './ComponentProperties'
import Button from './Button'


class ComponentCreate extends Component
{
    componentDidMount() {
      this.props.setWorkspace({})
    }

    render() {

      const { components, updateWorkspace, createComponent } = this.props

      return (
        <div>
        <Heading>Create new component</Heading>
        <ComponentProperties
        onChange={updateWorkspace}
        actions={<Button
          size="large"
          color="primary"
          onClick={createComponent}>Create</Button>
        }
        errors={{
          name: ['Required 222']
        }} />
        </div>
      )
    }
}


export default ComponentCreate
