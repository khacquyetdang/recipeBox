import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'react-bootstrap';
import App from './App';
import RecipeList from './components/RecipeList';
import AddRecipeItem from './components/AddRecipeItem'


describe("Component : App", function() {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders RecipeList', () => {
    const wrapper = shallow(<App />);
    const recipeList = wrapper.find(RecipeList);
    expect(wrapper.find(RecipeList).length).toEqual(1);
    //expect(1).toEqual(1);
  });

  it('renders Button', () => {
    const wrapper = shallow(<App />);
    const btnAddRecipe = <Button id="addItemBtn" bsStyle="primary">Add recipe</Button>;
      expect(wrapper.containsMatchingElement(btnAddRecipe)).toEqual(true);
    });


    it('render AddRecipeItem when click on the add recipe button', () => {
      const wrapper = shallow(<App />);

      const addBtn = wrapper.find('#addItemBtn');
      addBtn.simulate('click');
      const addRecipeItem = wrapper.find(AddRecipeItem);
      expect(addRecipeItem.props().show).toEqual(true);
      expect(wrapper.state().showAddItemModal).toEqual(true);
    });

});
