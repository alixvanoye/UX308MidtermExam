import { coinsTotal } from "../src/coins.js";

describe("coinsTotal", function () {
  it("tests all zeros", function () {
    expect(coinsTotal(0, 0, 0, 0, 0)).toBeCloseTo(0, 2);
  });

  it("tests 1 of each coin", function () {
    // 0.05 + 0.10 + 0.25 + 1.00 + 2.00 = 3.40
    expect(coinsTotal(1, 1, 1, 1, 1)).toBeCloseTo(3.40, 2);
  });

  it("tests a mixed set", function () {
    // 2 nickels (0.10) + 3 dimes (0.30) + 4 quarters (1.00) + 0 loonies + 2 toonies (4.00) = 5.40
    expect(coinsTotal(2, 3, 4, 0, 2)).toBeCloseTo(5.40, 2);
  });
});