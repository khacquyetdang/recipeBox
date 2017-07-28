import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/Root.js';
import configureStore from './configureStore.js';

const store = configureStore();
ReactDOM.render(
  <Root store={store}>
  </Root>, document.getElementById('root')
);
registerServiceWorker();
