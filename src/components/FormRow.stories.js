import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';
import FormRow from './FormRow'

storiesOf('FormRow', module)
  .addWithInfo('with text', `
    Some info
  `, () => (
    <FormRow
      label={ text('Label', 'Some label text') }
      element={ select('Element', {
        text: 'Text input',
      }, 'text') }
      description={ text('description', 'Some descriptive text below the element.') }
     />
  ))
