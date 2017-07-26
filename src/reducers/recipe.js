
const initialState = {
  recipes: [],
  item_expand: -1,
  edit_mode: false
}

export default function recipe(state = initialState, action) {
  switch (action.type) {
    case 'SET_RECIPES': {
      return Object.assign({}, state, {
        recipes: action.recipes
      });
    }
    case 'ADD_RECIPE': {
      return Object.assign({}, state, {
        recipes: [
          ...state.recipes,
          {
            name: action.name,
            ingredients: action.ingredients,
          }
        ]
      });
    }
    case 'UPDATE_RECIPE': {
      return Object.assign({}, state, {
        recipes: [
          ...state.recipes,
          {
            name: action.name,
            ingredients: action.ingredients,
          }
        ]
      });
    }
    case 'DELETE_RECIPE': {
      return Object.assign({}, state, {
        recipes:
          state.recipes.slice(0, action.index).concat(state.recipes.slice(action.index + 1))
      });
    }
    case 'VIEW_RECIPE_DETAIL': {
      return Object.assign({}, state, {
        item_expand: action.index,
        edit_mode: false
      });
    }

    case 'VIEW_RECIPE_EDIT_MODE': {
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
