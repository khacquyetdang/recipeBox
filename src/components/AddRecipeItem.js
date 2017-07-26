import React, { Component } from 'react';
import { Button, Well, Modal, Form,
FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './styles/AddRecipeItem.css';
import { connect } from 'react-redux';

class AddRecipeItem extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      show: this.props.show,
      name: '',
      ingredients: ''
    }
  }


  onFormSubmit(event) {
    const { store } = this.context;
    if (this.state.name.trim().length > 0)
    {
      const actionAddRecipe = {
        type: 'ADD_RECIPE',
        name: this.state.name,
        ingredients: this.state.ingredients
      };
      // both of them work
      //this.props.onAddItem(actionAddRecipe);
      this.props.dispatch(actionAddRecipe);
      this.props.onCloseAddItemModal();
    }
  }


  componentWillReceiveProps(nextProps)
  {
    this.setState ({
      show : nextProps.show
    });
  }

  hideModal(){
    this.props.onCloseAddItemModal();
  }
  render() {
    return (
      <Modal
        show={this.state.show}
        className="AddRecipeItemContainer">
        <Form>
          <Modal.Header>
            <Modal.Title className="text-center">Add a recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formInlineName">
              <ControlLabel>Recipe</ControlLabel>
              {' '}
              <FormControl className="nameTextInput" type="text" placeholder="Recipe Name"
                  onChange={event => this.setState({name: event.target.value})} />
            </FormGroup>

            <FormGroup controlId="formInlineName">
              <ControlLabel>Ingredients</ControlLabel>
              {' '}
              <FormControl className="ingredientsTextArea" componentClass="textarea" placeholder="Ingredients"
                onChange={event => this.setState({ingredients: event.target.value})}/>
            </FormGroup>

          </Modal.Body>
          <Modal.Footer>
            <Button  bsStyle="primary" onClick={ event => this.onFormSubmit(event)}>Add</Button>
            <Button  bsStyle="primary" onClick={ event => this.hideModal()}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    onAddItem: (actionAddRecipe) => {
      dispatch(actionAddRecipe);
    }
  }
}

//export default connect(null, mapDispatchToProps) (AddRecipeItem);
export default connect() (AddRecipeItem);
