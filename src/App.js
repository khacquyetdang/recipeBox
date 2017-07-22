import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import RecipeList from './components/RecipeList';
import AddRecipeItem from './components/AddRecipeItem';

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
    console.log("onAddRecipeBtnClick");
    this.setState({
      showAddItemModal: true
    });
  }

  closeAddItemModal()
  {
    console.log("closeAddItemModal");
    this.setState({
      showAddItemModal: false
    });
  }

  render() {
    const recipes = [{
      name: 'bun cha',
      ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
    }, {
      name: 'thit bo ham',
      ingredients: 'gung, nuoc ma, 1 thia dau, ca rot, duong, muoi, mat ong'
    },
    {
      name: 'porc au caramel',
      ingredients: 'l\'aile, sucre, 1 kg de porc , 1 cuière de l\'huile, du poivre, du sel'
    }];
    return (
      <div className="AppContainer">
        <div className="App">
          <RecipeList items={recipes}
            showAddItemModal={this.state.showAddItemModal}
            />
          <Button bsStyle="primary" onClick={(e) => this.onAddRecipeBtnClick()}>Add recipe</Button>
          <AddRecipeItem show={this.state.showAddItemModal}
              onCloseAddItemModal={this.closeAddItemModal}/>
        </div>
    </div>
    );
  }
}

export default App;
