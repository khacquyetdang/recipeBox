import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App.js';
import Footer from './Footer.js';
import AddRecipeItem from './AddRecipeItem.js';

const Root = ({store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/add' component={AddRecipeItem}/>
        <Footer />
      </div>
    </Router>
  </Provider>
);


export default Root;
