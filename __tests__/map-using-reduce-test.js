const map = require('../map-using-reduce');

describe('array map using reduce', () => {
  test('should be a function', () => {
    expect(typeof map).toEqual('function');
  });
  test('should have a length of 2', () => {
    expect(map.length).toEqual(2);
  });
  test('should double items in an array', () => {
    const nums = [1, 2, 3];

    expect(map(nums, x => x * 2)).toEqual([2, 4, 6]);
  });
});
