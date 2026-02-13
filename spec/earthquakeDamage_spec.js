import { earthquakeDamage } from "../src/earthquakeDamage.js";

describe("earthquakeDamage", function () {
  it("below 5 -> little/no damage", function () {
    expect(earthquakeDamage(4.9)).toBe("Little or no damage");
  });

  it("5 to <5.5 -> some damage", function () {
    expect(earthquakeDamage(5.2)).toBe("Some damage");
  });

  it("5.5 to <6.5 -> serious damage", function () {
    expect(earthquakeDamage(6.0)).toBe("Serious damage: walls may crack or fall");
  });

  it("6.5 to <7.5 -> disaster", function () {
    expect(earthquakeDamage(7.0)).toBe("Disaster: buildings may collapse");
  });

  it(">= 7.5 -> catastrophe", function () {
    expect(earthquakeDamage(7.5)).toBe("Catastrophe: most buildings destroyed");
  });
});

