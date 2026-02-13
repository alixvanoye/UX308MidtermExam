import { fahrenheit2celsius } from "../src/fahrenheit2celsius.js";

describe("fahrenheit2celsius", function () {
  it("freezing: 32F -> 0C", function () {
    expect(fahrenheit2celsius(32)).toBeCloseTo(0, 5);
  });

  it("boiling: 212F -> 100C", function () {
    expect(fahrenheit2celsius(212)).toBeCloseTo(100, 5);
  });

  it("room temp: 70F -> about 21.111C", function () {
    expect(fahrenheit2celsius(70)).toBeCloseTo(21.111111, 3);
  });
});