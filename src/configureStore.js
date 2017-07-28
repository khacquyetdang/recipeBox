import { createStore } from 'redux';
import { loadState, updateLocalStorage } from './localStorage.js';
import reducer from './reducers/recipe';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const persistedState = loadState();
  var store = createStore(reducer, persistedState);

  // throttle is for update one by sec
  store.subscribe(throttle(() => {
    updateLocalStorage(store.getState());
  }, 1000));

  return store;
}

export default configureStore;
