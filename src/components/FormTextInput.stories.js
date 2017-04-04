import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';
import FormTextInput from './FormTextInput';

storiesOf('FormTextInput', module)
  .addWithInfo('basic', () => (
    <FormTextInput

      name="test"

      value={ text('Value', 'Some text value') }

      size={ select('Size', {
        small: "Small",
        default: 'Default',
        large: "Large",
      })}

     />
  ))
