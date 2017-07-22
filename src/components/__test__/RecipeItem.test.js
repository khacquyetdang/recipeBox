import React from 'react';
import { shallow } from 'enzyme';
import RecipeItem from '../RecipeItem';
import { Button } from 'react-bootstrap';


describe("Component : RecipeItem", function() {
  beforeEach(function() {
  });

  it('renders without crashing', () => {
    const recipe = {
      name: 'bun cha',
      ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
    };
    shallow(<RecipeItem recipe={recipe} />);
  });

  it('it should show delete and edit on expand mode', () => {
    const recipe = {
      name: 'bun cha',
      ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
    };
    const wrapper = shallow(<RecipeItem recipe={recipe} />);
    wrapper.find('.RecipeTitle').simulate('click');
    const btnDelete = <Button className="buttonRecipeItem" bsStyle="danger">Delete</Button>;
    const btnEdit = <Button className="buttonRecipeItem">Edit</Button>;
    expect(wrapper.contains(btnEdit)).toEqual(true);
    expect(wrapper.contains(btnDelete)).toEqual(true);
  });


});
