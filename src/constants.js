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

const allTheSame = R.compose(x => x.length === 1, R.uniq());
const allDifferent = R.compose(x => x.length === 3, R.uniq());

// PREREQUISITE: 3 cards are passed in
export const isSet = (threeCards) => {
  return R.or(
    allTheSame(R.map(R.prop('number'))(threeCards)),
    allDifferent(R.map(R.prop('number'))(threeCards))
  )
  && R.or(
    allTheSame(R.map(R.prop('color'))(threeCards)),
    allDifferent(R.map(R.prop('color'))(threeCards))
  )
  && R.or(
    allTheSame(R.map(R.prop('fill'))(threeCards)),
    allDifferent(R.map(R.prop('fill'))(threeCards))
  )
  && R.or(
    allTheSame(R.map(R.prop('shape'))(threeCards)),
    allDifferent(R.map(R.prop('shape'))(threeCards))
  );
}