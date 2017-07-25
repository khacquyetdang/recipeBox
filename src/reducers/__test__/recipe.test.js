import reducer from '../recipe'

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

  it('should handle ADD_RECIPE', () => {
    expect(
      reducer (
        {
          recipes: [],
          item_expand: -1,
          edit_mode: false
        },
        {
          type: 'ADD_RECIPE',
          name: 'Pate',
          ingredients: 'Sel, beurre, poivre'
        }
      )
    ).toEqual(
      {
        recipes: [
          {
            name: 'Pate',
            ingredients: 'Sel, beurre, poivre'
          }
        ],
        item_expand: -1,
        edit_mode: false
      }
    );

    expect(
      reducer (
        {
          recipes: [
            {
              name: 'Pate',
              ingredients: 'Sel, beurre, poivre'
            }
          ],
          item_expand: -1,
          edit_mode: false
        },
        {
          type: 'ADD_RECIPE',
          name: 'bun cha',
          ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
        }
      )
    ).toEqual(
      {
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
      }
    );
  }
);

it('should handle DELETE_RECIPE', () => {
  expect(
    reducer (
      {
        recipes: [
          {
            name: 'Pate',
            ingredients: 'Sel, beurre, poivre'
          }
        ],
        item_expand: -1,
        edit_mode: false
      },
      {
        type: 'DELETE_RECIPE',
        index: 0
      }
    )
  ).toEqual(
    {
      recipes: [
      ],
      item_expand: -1,
      edit_mode: false
    }
  );

  expect(
    reducer ({
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
    },
    {
      type: 'DELETE_RECIPE',
      index: 0,
      ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
    }
  )
).toEqual({
  recipes: [
    {
      name: 'bun cha',
      ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
    }
  ],
  item_expand: -1,
  edit_mode: false
});

expect(
  reducer ({
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
  },
  {
    type: 'DELETE_RECIPE',
    index: 1,
    ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
  }
)
).toEqual({
  recipes: [
    {
      name: 'Pate',
      ingredients: 'Sel, beurre, poivre'
    }
  ],
  item_expand: -1,
  edit_mode: false
});


expect(
  reducer ({
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
  },
  {
    type: 'DELETE_RECIPE',
    index: 1,
    ingredients: 'tieu, nuoc mam, bun tuoi, hanh toi'
  }
)
).toEqual({
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
});


}
);

});
