import React from 'react';
import { shallow } from 'enzyme';
import RecipeList from '../RecipeList';
import RecipeItem from '../RecipeItem';

describe("Component : RecipeList", function() {
  beforeEach(function() {
  });

  it('renders without crashing', () => {
    var recipes = [];
    const wrapper = shallow(<RecipeList items={recipes} />);
    //expect(wrapper.find(RecipeList).length).toEqual(1);

    expect(wrapper.find(RecipeItem).exists()).toEqual(false);
  });

  it('renders with items', () => {
    const recipes = [{
      name: 'bun cha',
      ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
    }, {
      name: 'thit bo ham',
      ingredients: 'gung, nuoc ma, 1 thia dau, ca rot, duong, muoi, mat ong'
    }];
    const wrapper = shallow(<RecipeList items={recipes} />);
    expect(wrapper.find(RecipeItem).length).toEqual(recipes.length);
  });

});
