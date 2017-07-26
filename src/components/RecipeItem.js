import React, { Component } from 'react';
import { Button, Well, FormControl, Form, FormGroup, ControlLabel, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import './styles/RecipeItem.css';
import {
  DELETE_RECIPE,
  UPDATE_RECIPE
} from '../constants';

class RecipeItem extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      expand: false,
      editingMode: false,
      showalert: false,
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.closeDeleteAlert = this.closeDeleteAlert.bind(this);
    this.onConfirmDeleteRecipe = this.onConfirmDeleteRecipe.bind(this);

    console.log('render item ' + this.props.index);
  }

  onExpand(event)
  {
    //event.preventDefault();
    var expand = !this.state.expand;
    this.setState({
      expand
    });
  }
  closeDeleteAlert(event)
  {
    this.setState({
      showalert: false
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

  onDeleteBtnClick(event) {
    this.setState({
      showalert: true
    });
  }
  onConfirmDeleteRecipe(event) {
    const actionDeleteRecipe = {
      type: DELETE_RECIPE,
      index: this.props.index
    };
    this.props.onDeleteRecipe(actionDeleteRecipe);
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

  renderAlert()
  {
    return (
      <Modal show={this.state.showalert} onHide={this.closeDeleteAlert}>
         <Modal.Header closeButton>
           <Modal.Title>Delete </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>Do you want to remove this recipes?</p>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.onConfirmDeleteRecipe}>Yes</Button>
           <Button onClick={this.closeDeleteAlert}>Close</Button>
         </Modal.Footer>
       </Modal>
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
            <Button className="buttonRecipeItem"
              onClick={(event) => this.onDeleteBtnClick(event)}
              bsStyle="danger">Delete</Button>
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
        { this.renderDetail() }
        { this.renderAlert() }
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return {
    onDeleteRecipe: (actionDeleteRecipe) => {
      dispatch(actionDeleteRecipe);
    }
  }
}

export default connect(null, mapDispatchToProps) (RecipeItem);
