import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import RecipeList from './RecipeList';
import AddRecipeItem from './AddRecipeItem';
import { withRouter } from 'react-router-dom';
import { initialState } from '../reducers/recipe';
import { setRecipes } from '../actions';
import { LOCAL_STORAGE_KEY } from '../constants';
import './styles/App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
  }

  onAddRecipeBtnClick()
  {
    this.props.history.push("/add");
  }

  render() {
    return (
        <div className="AppContainer">
          <div className="App">
            <Button id="addItemBtn" bsStyle="primary" onClick={(e) => this.onAddRecipeBtnClick()}>Add recipe</Button>
            <RecipeList />
          </div>
        </div>
    );
  }
}

export default withRouter(App);
