import { configure ,addDecorator} from '@storybook/react';
import React from 'react';
const req = require.context('../stories', true, /\.js$/);

addDecorator(storyFn => <div style={{ textAlign: 'center' }}>{storyFn()}</div>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);