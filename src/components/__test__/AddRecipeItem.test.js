import React from 'react';
import { shallow } from 'enzyme';
import AddRecipeItem from '../AddRecipeItem';
import { Button, Modal, ControlLabel } from 'react-bootstrap';


describe("Component : AddRecipeItem", function() {
  beforeEach(function() {
  });

  it('renders without crashing', () => {
    shallow(<AddRecipeItem />);
  });

  it('it should be a Modal', () => {
    const wrapper = shallow(<AddRecipeItem />);
    expect(wrapper.find(Modal).at(0).length).toEqual(1);
  });

  it('it should show contains title "Add a recipe"', () => {
    const wrapper = shallow(<AddRecipeItem />);
    const addRecipeTitle = <h2>Add a recipe</h2>;
    expect(wrapper.contains(addRecipeTitle)).toEqual(true);
  });


  it('it should show contains label "Recipe"', () => {
    const wrapper = shallow(<AddRecipeItem />);
    const recipeNameLabel =   <ControlLabel>Recipe</ControlLabel>
    expect(wrapper.contains(recipeNameLabel)).toEqual(true);
  });


  it('it should show contains label "Ingredients"', () => {
    const wrapper = shallow(<AddRecipeItem />);
    const ingredientLabel = <ControlLabel>Ingredients</ControlLabel>;
    expect(wrapper.contains(ingredientLabel)).toEqual(true);
  });

  it('it should show contains button "Add"', () => {
    const wrapper = shallow(<AddRecipeItem />);
    const addBtn = <Button bsStyle="primary">Add</Button>;
    expect(wrapper.containsMatchingElement(addBtn)).toEqual(true);
  });

  it('it should show contains button "Close"', () => {
    const wrapper = shallow(<AddRecipeItem />);
    const addBtn = <Button bsStyle="primary">Close</Button>;
    expect(wrapper.containsMatchingElement(addBtn)).toEqual(true);
  });

  it('it should show one input and one text area', () => {
    const wrapper = shallow(<AddRecipeItem />);
    expect(wrapper.find('.ingredientsTextArea').length).toEqual(1);
    expect(wrapper.find('.ingredientsTextInput').length).toEqual(1);
  });



});
