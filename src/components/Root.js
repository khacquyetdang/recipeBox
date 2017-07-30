import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App.js';
import AddRecipeItem from './AddRecipeItem.js';

const Root = ({store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/add' component={AddRecipeItem}/>
      </div>
    </Router>
  </Provider>
);


export default Root;
