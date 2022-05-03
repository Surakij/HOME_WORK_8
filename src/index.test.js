import { sum } from "./index";

describe("sum", () => {
  test("sum two numbers", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
