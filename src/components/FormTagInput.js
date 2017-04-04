import React from 'react'
import FormTextInput from './FormTextInput'

export default ({name, value, onChange}) => {

  const string = value.join(', ')

  return <FormTextInput
    name={name}
    value={string}
    onChange={onChange} />
}
