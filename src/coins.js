//input coin quantity
export function coinsTotal(nickels, dimes, quarters, loonies, toonies) {
  
  // processing
  let total =
    nickels * 0.05 +
    dimes * 0.10 +
    quarters * 0.25 +
    loonies * 1.00 +
    toonies * 2.00;

  // output amount in dollars
  return total;
}

// developer test
if (import.meta.main) {
  console.log(`coinsTotal(1,1,1,1,1) = ${coinsTotal(1, 1, 1, 1, 1)}`);
  console.log(`coinsTotal(0,0,0,0,0) = ${coinsTotal(0, 0, 0, 0, 0)}`);
}
