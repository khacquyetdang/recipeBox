import React, { Component } from 'react';
import './styles/RecipeList.css';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {

  constructor(props)
  {
    super(props);
  }

  renderItems() {
    var { items } = this.props;
    var itemList = [];
    if (items !== undefined && items.length > 0)
    {
      itemList = items.map((recipe, index) => {
        return <RecipeItem key={index} recipe={recipe}/>;
      });
    }
    return itemList;
  }
  render() {
    return (
      <div className="RecipeListContainer">
        { this.renderItems() }
      </div>
    );
  }
}

export default RecipeList;
