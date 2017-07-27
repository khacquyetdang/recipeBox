import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import RecipeList from './components/RecipeList';
import AddRecipeItem from './components/AddRecipeItem';
import { initialState } from './reducers/recipe';
import { setRecipes } from './actions';
import { LOCAL_STORAGE_KEY } from './constants';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.closeAddItemModal = this.closeAddItemModal.bind(this);
    this.state = {
      showAddItemModal: false,
      showEditItemModal: false
    }
  }

  onAddRecipeBtnClick()
  {
    //console.log("onAddRecipeBtnClick");
    this.setState({
      showAddItemModal: true
    });
  }

  closeAddItemModal()
  {
    this.setState({
      showAddItemModal: false
    });
  }
  componentDidMount()
  {
    var state = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (state === undefined || state === null || state === "[object Object]")
    {
      state = initialState;
    };
    this.props.setRecipes(state.recipes);
  }
  render() {
    return (
        <div className="AppContainer">
          <div className="App">
            <Button id="addItemBtn" bsStyle="primary" onClick={(e) => this.onAddRecipeBtnClick()}>Add recipe</Button>
            <RecipeList
              showAddItemModal={this.state.showAddItemModal}
              />
            <AddRecipeItem show={this.state.showAddItemModal}
              onCloseAddItemModal={this.closeAddItemModal}/>
          </div>
        </div>
    );
  }
}

export default connect(null, { setRecipes }) (App);
