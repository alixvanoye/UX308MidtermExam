// input amount of friends and current cost of membership
export function gymCost(cost, friends) {
  let discount = 0;

  // processing
  if (friends === 1) {
    discount = 0.05;
  } else if (friends === 2) {
    discount = 0.10;
  } else if (friends >= 3) {
    discount = 0.15;
  }

  let total = cost * (1 - discount);

  // output: discounted total cost
  return total;
}

// developer test
if (import.meta.main) {
  console.log(`gymCost(100,0) = ${gymCost(100, 0)}`);
  console.log(`gymCost(100,3) = ${gymCost(100, 3)}`);
}
