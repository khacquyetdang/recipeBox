import {
    ADD_RECIPE,
    DELETE_RECIPE,
    SET_RECIPES,
    UPDATE_RECIPE,
    VIEW_RECIPE_DETAIL,
    VIEW_RECIPE_EDIT_MODE,
    LOCAL_STORAGE_KEY,
} from '../constants';

const initialState = {
  recipes: [],
  item_expand: -1,
  edit_mode: false
}

function updateLocalStorage(state)
{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(state));
}
export default function recipe(state = initialState, action) {
  var recipes = [];
  state = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (state === undefined || state === null || state === "[object Object]")
  {
    state = initialState;
  }
  switch (action.type) {
    case SET_RECIPES: {
      return Object.assign({}, state, {
        recipes: action.recipes
      });
    }
    case ADD_RECIPE: {
      console.log("AddRecipe");
      console.log(state);
      recipes = [
        ...state.recipes,
        {
          name: action.name,
          ingredients: action.ingredients,
        }
      ];
      state = Object.assign({}, state, {
        recipes: recipes }
      );
      updateLocalStorage(state);
      return state;
    }
    case UPDATE_RECIPE: {
      recipes = state.recipes.map((recipe, index) => {
        if (index === action.index)
        {
          return { name: action.name, ingredients: action.ingredients }
        }
        return recipe;
      });
      state = Object.assign({}, state, {
        recipes: recipes }
      );
      updateLocalStorage(state);
      return state;
    }
    case DELETE_RECIPE: {
      recipes = state.recipes.slice(0, action.index).concat(state.recipes.slice(action.index + 1));
      state = Object.assign({}, state, {
        recipes: recipes }
      );
      updateLocalStorage(state);
      return state;
    }
    case VIEW_RECIPE_DETAIL: {
      return Object.assign({}, state, {
        item_expand: action.index,
        edit_mode: false
      });
    }

    case VIEW_RECIPE_EDIT_MODE: {
      return Object.assign({}, state,
        {
          edit_mode: true
        }
      );
    }
    default: {
      return state;
    }
  }
}
