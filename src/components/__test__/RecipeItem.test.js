import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from '../RecipeItem';
import { Button } from 'react-bootstrap';


describe("Component : RecipeItem", function() {
  const recipe = {
    name: 'bun cha',
    ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
  };

  var wrapper;
  beforeEach(function() {
    wrapper = shallow(<RecipeItem recipe={recipe} />);
  });

  it('renders without crashing', () => {
    shallow(<RecipeItem recipe={recipe} />);
  });

  it('it should show delete and edit on expand mode', () => {
    wrapper.find('.RecipeTitle').simulate('click');
    const btnDelete = <Button className="buttonRecipeItem" bsStyle="danger">Delete</Button>;
    const btnEdit = <Button className="buttonRecipeItem">Edit</Button>;
    expect(wrapper.containsMatchingElement(btnEdit)).toEqual(true);
    expect(wrapper.containsMatchingElement(btnDelete)).toEqual(true);
  });

  it('it should show edit Mode when click on Edit', () => {
    wrapper.find('.RecipeTitle').simulate('click');
    const editBtn = wrapper.find('#editItemBtn');
    editBtn.simulate('click');
    expect(wrapper.state().editingMode).toEqual(true);
  });

  it('It should render edit mode correct when click on edit', () => {
    wrapper.find('.RecipeTitle').simulate('click');
    const editBtn = wrapper.find('#editItemBtn');
    editBtn.simulate('click');

    const validBtn = <Button className="buttonRecipeItem" bsStyle="primary">Valid</Button>;
    const closeBtn = <Button className="buttonRecipeItem" bsStyle="primary">Cancel</Button>;
    expect(wrapper.containsMatchingElement(validBtn)).toEqual(true);
    expect(wrapper.containsMatchingElement(closeBtn)).toEqual(true);

  });



});
