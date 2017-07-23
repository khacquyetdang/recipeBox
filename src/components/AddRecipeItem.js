import React, { Component } from 'react';
import { Button, Well, Modal, Form,
FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './styles/AddRecipeItem.css';

class AddRecipeItem extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      show: this.props.show
    }
  }

  componentWillReceiveProps(nextProps)
  {
    //console.log("componentWillReceiveProps");
    this.setState ({
      show : nextProps.show
    });
  }

  hideModal(){
    //console.log("hideModal");
    this.props.onCloseAddItemModal();
  }
  render() {
    return (
      <Modal
        show={this.state.show}
        className="AddRecipeItemContainer">
      <Form>
      <Modal.Header>
      <Modal.Title className="text-center"><h2>Add a recipe</h2></Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <FormGroup controlId="formInlineName">
      <ControlLabel>Recipe</ControlLabel>
      {' '}
      <FormControl className="ingredientsTextInput" type="text" placeholder="Recipe Name" />
      </FormGroup>

      <FormGroup controlId="formInlineName">
      <ControlLabel>Ingredients</ControlLabel>
      {' '}
      <FormControl className="ingredientsTextArea" componentClass="textarea" />
      </FormGroup>

      </Modal.Body>
      <Modal.Footer>
      <Button  bsStyle="primary">Add</Button>
      <Button  bsStyle="primary" onClick={(event) => this.hideModal()}>Close</Button>
      </Modal.Footer>
      </Form>
      </Modal>
    );
  }
}

export default AddRecipeItem;
