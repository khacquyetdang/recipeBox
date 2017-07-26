import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';
import './styles/RecipeList.css';

class RecipeList extends Component {

  constructor(props)
  {
    super(props);
  }

  renderItems() {
    var { recipes } = this.props;
    var itemList = [];
    if (recipes !== undefined && recipes.length > 0)
    {
      itemList = recipes.map((recipe, index) => {
        return <RecipeItem key={index} index={index} recipe={recipe}/>;
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

function mapStateToProps(state)
{
  const { recipes } = state;
  return {
    recipes
  }
}

export default connect(mapStateToProps) (RecipeList);
