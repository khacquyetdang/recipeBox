import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, updateLocalStorage } from './localStorage.js';
import reducer from './reducers/recipe';
import throttle from 'lodash/throttle';

const persistedState = loadState();
var store = createStore(reducer, persistedState);

// throttle is for update one by sec
store.subscribe(throttle(() => {
  updateLocalStorage(store.getState());
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
