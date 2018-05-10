import * as R from 'ramda';

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