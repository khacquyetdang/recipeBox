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
    const btnAddRecipe = <Button bsStyle="primary">Add recipe</Button>;
      expect(wrapper.contains(btnAddRecipe)).toEqual(true);
    });


    it('render AddRecipeItem when click on the add recipe button', () => {
      const wrapper = shallow(<App />);
      const addRecipeItem = wrapper.find(AddRecipeItem);
      expect(false).toEqual(true);
    });

});
