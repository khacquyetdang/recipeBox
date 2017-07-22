import React, { Component } from 'react';
import { Button, Well } from 'react-bootstrap';
import './styles/RecipeItem.css';

class RecipeItem extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      expand: false
    }
  }

  onExpand(event)
  {
    //event.preventDefault();
    var expand = !this.state.expand;
    this.setState({
      expand
    })
  }
  renderDetail()
  {
    if (this.state.expand)
    {
      return (
        <div className="RecipeDetailContainer">
          <div className="RecipeDetailTitle">
            <h4>
              Ingredients
            </h4>
          </div>
          <div className="RecipeDetailContent">
            <Well>
              {
                this.props.recipe.ingredients
              }
            </Well>
          </div>
          <div className="RecipeAddEditContainer">
            <Button className="buttonRecipeItem" bsStyle="danger">Delete</Button>
            <Button className="buttonRecipeItem">Edit</Button>
          </div>

        </div>);
    }
    return <div></div>;
  }
  render() {
    return (
      <div className="RecipeItemContainer">
        <div className="RecipeTitle" onClick={(event) => this.onExpand(event)}>
            { this.props.recipe.name }
          </div>
        {   this.renderDetail() }
      </div>
    );
  }
}

export default RecipeItem;
