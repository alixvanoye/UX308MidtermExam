// input scale number
export function earthquakeDamage(intensity) {
  let result = "";

  // processing by selecting category
  if (intensity < 5) {
    result = "Little or no damage";
  } else if (intensity < 5.5) {
    result = "Some damage";
  } else if (intensity < 6.5) {
    result = "Serious damage: walls may crack or fall";
  } else if (intensity < 7.5) {
    result = "Disaster: buildings may collapse";
  } else {
    result = "Catastrophe: most buildings destroyed";
  }

  // output earthquate intensity description
  return result;
}

// developer test
if (import.meta.main) {
  console.log(`earthquakeDamage(4.9) = ${earthquakeDamage(4.9)}`);
  console.log(`earthquakeDamage(7.6) = ${earthquakeDamage(7.6)}`);
}
