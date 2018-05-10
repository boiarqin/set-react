import * as R from 'ramda';

export const _NUMBERS = [1,2,3];
export const _COLORS = ['red','green','purple'];
export const _FILLS = ['empty','striped','solid'];
export const _SHAPES = ['oval','squiggle','diamond'];

const flattenCombo = (combo) => ({
  'shape': combo[0],
  'fill': combo[1][0],
  'color': combo[1][1][0],
  'number': combo[1][1][1]
});

//const nestedCombos = R.compose(R.xprod(_SHAPES), R.xprod(_FILLS), R.xprod(_COLORS))(_NUMBERS);

const nestedCombos = R.compose(...R.map(R.xprod, [_SHAPES, _FILLS, _COLORS]))(_NUMBERS);

export const allSetCards = R.map(flattenCombo, nestedCombos);

// https://stackoverflow.com/a/12646864
export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};