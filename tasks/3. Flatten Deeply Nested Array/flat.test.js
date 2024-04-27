
import { flat } from "./flat";

const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

describe("test flat", () => {
  test("test 0", () => {
    expect(flat(array, 0)).toEqual([
      1,
      2,
      3,
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ]);
  });

  test("test 1", () => {
    expect(flat(array, 1)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      [9, 10, 11],
      12,
      13,
      14,
      15,
    ]);
  });

  test("test 3", () => {
    expect(flat(array, 3)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
    ]);
  });

  test("test -3", () => {
    expect(flat(array, -3)).toEqual([
      1,
      2,
      3,
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ]);
  });
});
