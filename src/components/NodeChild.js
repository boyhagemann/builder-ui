import React from 'react'
import Link from './Link'
import Row from './Row'
import ButtonLink from './ButtonLink'
import { pathToNodeContent, pathToNodeProperties, firstCollectionField } from '../helpers'

export default ({components, component, node}) => {

  // Get the content type component
  const type = components[node.type]

  if(!type) {
    console.error('Type not found: ' + node.type)
    return <div>Loading related components</div>
  }

  // Get the first content field to show
  const firstField = firstCollectionField(type, node)

  return (
    <Row
      key={node.__id}
      actions={(
        <ButtonLink to={pathToNodeProperties(component._id, node.__id)} size="small" label="Edit" />
      )}
    >
      <Link to={pathToNodeContent(component._id, node.__id, firstField )}>
        { node.label || node.__id }
      </Link>
    </Row>
  )
}
