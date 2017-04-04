import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addWithInfo('with text', `
    Some info
  `, () => (
    <Button
      onClick={action('clicked')}

      size={ select('Size', {
        tiny: "Tiny",
        small: "Small",
        default: "Default",
        large: "Large"
      }, 'default')}

      level={ select('Level', {
        default: "Default",
        primary: "Primary"
      }, 'default')}

    >{ text('Label', 'Hellloooo') }</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
