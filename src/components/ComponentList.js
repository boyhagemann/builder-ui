import React from 'react'
import { Link } from 'react-router-dom'

export default ({components}) => (
  <div>
  <h3>Components</h3>
  { components.map( component =>
    <div key={component._id}>
    <Link to={ "/components/" + component._id }>{ component.label }</Link>
    <p>{ component.uses.join(', ') }</p>
    </div>
   )}
  </div>
)
