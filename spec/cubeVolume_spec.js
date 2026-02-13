import { cubeVolume } from "../src/cubeVolume.js";

describe("cubeVolume", function () {
  it("side 1 -> volume 1", function () {
    expect(cubeVolume(1)).toBeCloseTo(1, 6);
  });

  it("side 2 -> volume 8", function () {
    expect(cubeVolume(2)).toBeCloseTo(8, 6);
  });

  it("side 0.5 -> volume 0.125", function () {
    expect(cubeVolume(0.5)).toBeCloseTo(0.125, 6);
  });
});
