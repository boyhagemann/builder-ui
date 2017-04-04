import React from 'react';
import { storiesOf, action, linkTo, addDecorator } from '@kadira/storybook';
import { withKnobs, text, boolean, number, select } from '@kadira/storybook-addon-knobs';
import { setOptions } from '@kadira/storybook-addon-options'

import loadAllStories from './load'
import Welcome from './Welcome';

setOptions({
  name: 'Builder UI',
  url: 'http://localhost:3000',
  downPanelInRight: true
})

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
addDecorator(withKnobs)


// Start with some index page
storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));


// Load all stories from the "src/components" folder
loadAllStories()
