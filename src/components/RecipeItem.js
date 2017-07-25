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

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
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


  onCancelBtnClick(event)
  {
    //event.preventDefault();
    console.log("onCancelBtnClick");
    this.setState({
      editingMode: false
    });
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleIngredientsChange(event) {
    this.setState({ingredients: event.target.value});
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
               type="text"
               onChange= { this.handleNameChange }
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
              onChange = { this.handleIngredientsChange }
              />
          </FormGroup>

          <div className="RecipeBtnContainer">
            <Button
              id="cancelItemBtn"
              className="buttonRecipeItem"
              bsStyle="primary"
              onClick={(event) => this.onCancelBtnClick(event)}>Cancel
              </Button>
            <Button
              id="validItemBtn"
              bsStyle="primary"
              className="buttonRecipeItem"
              onClick={(event) => this.onEditBtnClick(event)}>
              Valid</Button>
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
