const defaultEquals = function (a, b) {
  return a === b;
};

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

function defaultCompare(a, b) {
  if (a === b) return 0;
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

module.exports = {
  defaultEquals,
  defaultCompare,
  Compare
};
