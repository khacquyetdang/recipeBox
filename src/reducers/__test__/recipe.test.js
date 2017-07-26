import reducer from '../recipe';

import deepFreeze from 'deep-freeze';
describe('recipes reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        recipes: [],
        item_expand: -1,
        edit_mode: false
      }
    )
  });

  it('should handle SET_RECIPES', () => {
    const stateSetRecipeBefore = {
      recipes: [],
      item_expand: -1,
      edit_mode: false
    };

    const recipes = [{
      name: 'bun cha',
      ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
    }, {
      name: 'thit bo ham',
      ingredients: 'gung, nuoc ma, 1 thia dau, ca rot, duong, muoi, mat ong'
    },
    {
      name: 'porc au caramel',
      ingredients: 'l\'aile, sucre, 1 kg de porc , 1 cuière de l\'huile, du poivre, du sel'
    }];
    const actionsetRecipe = {
      type: 'SET_RECIPES',
      recipes: recipes
    };

    const statesetRecipes1Expected = {
      recipes: recipes,
      item_expand: -1,
      edit_mode: false
    };

    deepFreeze(stateSetRecipeBefore);
    deepFreeze(recipes);
    expect(
      reducer (
        stateSetRecipeBefore,
        actionsetRecipe
      )
    ).toEqual(
      statesetRecipes1Expected
    );

  });

  it('should handle ADD_RECIPE', () => {
    const stateSimpleBefore = {
      recipes: [],
      item_expand: -1,
      edit_mode: false
    };
    const stateSimpleAdd = {
      recipes: [
        {
          name: 'Pate',
          ingredients: 'Sel, beurre, poivre'
        }
      ],
      item_expand: -1,
      edit_mode: false
    };
    const actionAdd1 = {
      type: 'ADD_RECIPE',
      name: 'Pate',
      ingredients: 'Sel, beurre, poivre'
    };
    deepFreeze(stateSimpleBefore);
    expect(
      reducer (
        stateSimpleBefore,
        actionAdd1
      )
    ).toEqual(
      stateSimpleAdd
    );

    const stateBeforeTestAdd = {
      recipes: [
        {
          name: 'Pate',
          ingredients: 'Sel, beurre, poivre'
        }
      ],
      item_expand: -1,
      edit_mode: false
    };
    const actionAdd2 = {
      type: 'ADD_RECIPE',
      name: 'bun cha',
      ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
    };
    const stateTestAdd2Expected = {
      recipes: [
        {
          name: 'Pate',
          ingredients: 'Sel, beurre, poivre'
        },
        {
          name: 'bun cha',
          ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
        }
      ],
      item_expand: -1,
      edit_mode: false
    };

    deepFreeze(stateBeforeTestAdd);
    expect(
      reducer (
        stateBeforeTestAdd, actionAdd2
      )
    ).toEqual(stateTestAdd2Expected);
  }
);

it('should handle DELETE_RECIPE', () => {
  const actionDelete1 =   {
    type: 'DELETE_RECIPE',
    index: 0
  };
  const stateBeforeTestDelete = {
    recipes: [
      {
        name: 'Pate',
        ingredients: 'Sel, beurre, poivre'
      }
    ],
    item_expand: -1,
    edit_mode: false
  };
  const expectedResultTestDelete1 = {
    recipes: [
    ],
    item_expand: -1,
    edit_mode: false
  };
  deepFreeze(stateBeforeTestDelete);
  expect(
    reducer (
      stateBeforeTestDelete, actionDelete1
    )
  ).toEqual(
    expectedResultTestDelete1
  );

  const actionDelete2 = {
    type: 'DELETE_RECIPE',
    index: 0,
    ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
  };
  const stateBeforeTestDelete2 =  {
    recipes: [
      {
        name: 'Pate',
        ingredients: 'Sel, beurre, poivre'
      },
      {
        name: 'bun cha',
        ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
      }
    ],
    item_expand: -1,
    edit_mode: false
  };
  const stateTestDelete2Expected = {
    recipes: [
      {
        name: 'bun cha',
        ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
      }
    ],
    item_expand: -1,
    edit_mode: false
  };
  deepFreeze(stateBeforeTestDelete2);
  expect(
    reducer (stateBeforeTestDelete2, actionDelete2)
  ).toEqual(stateTestDelete2Expected);

  const actionDelete3 = {
    type: 'DELETE_RECIPE',
    index: 1
  };
  const stateBeforeTestDelete3 = {
    recipes: [
      {
        name: 'Pate',
        ingredients: 'Sel, beurre, poivre'
      },
      {
        name: 'bun cha',
        ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
      }
    ],
    item_expand: -1,
    edit_mode: false
  };
  const stateTestDelete3Expected= {
    recipes: [
      {
        name: 'Pate',
        ingredients: 'Sel, beurre, poivre'
      }
    ],
    item_expand: -1,
    edit_mode: false
  };
  deepFreeze(stateBeforeTestDelete3);
  expect(
    reducer (stateBeforeTestDelete3, actionDelete3)
  ).toEqual(stateTestDelete3Expected);

  const actionDelete4 = {
    type: 'DELETE_RECIPE',
    index: 1,
  };
  const stateBeforeDelete4 = {
    recipes: [
      {
        name: 'Pate',
        ingredients: 'Sel, beurre, poivre'
      },
      {
        name: 'bun cha',
        ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
      },
      {
        name: 'porc au caramel',
        ingredients: 'l\'aile, sucre, 1 kg de porc , 1 cuière de l\'huile, du poivre, du sel'
      }
    ],
    item_expand: -1,
    edit_mode: false
  };
  const stateExpectedDelete4 = {
    recipes: [
      {
        name: 'Pate',
        ingredients: 'Sel, beurre, poivre'
      },
      {
        name: 'porc au caramel',
        ingredients: 'l\'aile, sucre, 1 kg de porc , 1 cuière de l\'huile, du poivre, du sel'
      }
    ],
    item_expand: -1,
    edit_mode: false
  };
  deepFreeze(stateBeforeDelete4);
  expect(
    reducer (stateBeforeDelete4 ,actionDelete4)
  ).toEqual(stateExpectedDelete4);

}
);

});
