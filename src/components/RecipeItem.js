import React, { Component } from 'react';
import { Button, Well, FormControl, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import './styles/RecipeItem.css';

class RecipeItem extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      expand: false,
      editingMode: false,
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients
    }
  }

  onExpand(event)
  {
    //event.preventDefault();
    var expand = !this.state.expand;
    this.setState({
      expand
    });
  }

  onEditBtnClick(event)
  {
    //event.preventDefault();
    console.log("onEditBtnClick");
    this.setState({
      editingMode: true
    });
  }
  renderEditMode()
  {
    return (
      <div className="RecipeItemContainer">
        <Form>
          <div className="RecipeEditingTitle">
            <h4>
              Edit Recipe
            </h4>
          </div>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            {' '}
            <FormControl
              className="ingredientsTextArea"
              componentClass="textarea"
              value= { this.state.name }
              />
          </FormGroup>

          <FormGroup controlId="formInlineName">
            <ControlLabel>Ingredients</ControlLabel>
            {' '}
            <FormControl
              className="ingredientsTextArea"
              componentClass="textarea"
              value= { this.state.ingredients }
              />
          </FormGroup>

          <div className="RecipeBtnContainer">
            <Button className="buttonRecipeItem" bsStyle="primary">Cancel</Button>
            <Button
              id="validItemBtn"
              onClick={(event) => this.onEditBtnClick(event)}
              className="buttonRecipeItem">
              Edit</Button>
          </div>
        </Form>
      </div>
    );
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
            <Button
              id="editItemBtn"
              onClick={(event) => this.onEditBtnClick(event)}
              className="buttonRecipeItem">
              Edit</Button>
          </div>

        </div>);
      }
    return <div></div>;
  }
  render() {
    if (this.state.editingMode)
    {
      return this.renderEditMode();
    }
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
