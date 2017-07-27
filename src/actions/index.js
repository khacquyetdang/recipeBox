// key for localStorage
import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE, SET_RECIPES } from '../constants';

export function setRecipes(recipes) {
  const action = {
    type: SET_RECIPES,
    recipes
  }
  return action;
}


export function addRecipe(name, ingredients) {
  const action = {
    type: ADD_RECIPE,
    name,
    ingredients
  }
  return action;
}

export function deleteRecipe(index) {
  const action = {
    type: DELETE_RECIPE,
    index
  }
  return action;
}

export function updateRecipe(index, name, ingredients) {
  const action = {
    type: UPDATE_RECIPE,
    index,
    name,
    ingredients
  }
  return action;
}
