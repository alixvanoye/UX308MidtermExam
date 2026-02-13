import { Text, View } from "react-native";
import { coinsTotal } from "../coins.js";

// input coins quantity count
export function Coins({ nickels, dimes, quarters, loonies, toonies }) {
  // processing
  let total = coinsTotal(nickels, dimes, quarters, loonies, toonies);

  // output value of coins in dollars
  return (
    <View>
      <Text>
        coinsTotal({nickels},{dimes},{quarters},{loonies},{toonies}) returned $
        {total.toFixed(2)}
      </Text>
    </View>
  );
}
