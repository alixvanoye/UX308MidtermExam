import { gymCost } from "../src/gymCost.js";

describe("gymCost", function () {
  it("1 friend -> 5% off", function () {
    expect(gymCost(100, 1)).toBeCloseTo(95, 6);
  });

  it("2 friends -> 10% off", function () {
    expect(gymCost(100, 2)).toBeCloseTo(90, 6);
  });

  it("3 friends -> 15% off", function () {
    expect(gymCost(100, 3)).toBeCloseTo(85, 6);
  });

  it("4 friends -> still 15% off", function () {
    expect(gymCost(100, 4)).toBeCloseTo(85, 6);
  });
});
