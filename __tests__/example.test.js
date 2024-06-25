import { sum } from '../src/sum.js';

test('sum of 1 and 2 should be 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('true is true', () => {
  expect(true).toBe(true);
});
