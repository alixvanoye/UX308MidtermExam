// input temperature in fahrenheit
export function fahrenheit2celsius(f) {
  
  // processing formula fahrenheit to celsius  
  let c = (f - 32) * (5 / 9);
  
  // output temperature in celsius
  return c;
}

// developer test
if (import.meta.main) {
  console.log(`fahrenheit2celsius(32) = ${fahrenheit2celsius(32)}`);
  console.log(`fahrenheit2celsius(212) = ${fahrenheit2celsius(212)}`);
}
