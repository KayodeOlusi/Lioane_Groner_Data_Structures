const defaultEquals = function (a, b) {
  return a === b;
};

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

const Colors = {
  BLACK: 'BLACK',
  RED: 'RED'
};

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

function defaultCompare(a, b) {
  if (a === b) return Compare.EQUALS;
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function swap(array, a, b) {
  const temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

module.exports = {
  defaultEquals,
  defaultCompare,
  BalanceFactor,
  Compare,
  Colors,
  swap
};
