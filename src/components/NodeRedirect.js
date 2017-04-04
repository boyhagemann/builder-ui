import React from 'react'
import { Redirect } from 'react-router-dom'

export default ({component, node, field}) => (
  <Redirect to={ "/components/" + component + "/nodes/" + node + "/" + field } />
)
