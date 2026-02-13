import { Text, View } from "react-native";
import { gymCost } from "../gymCost.js";

// input cost and amount of friends refered
export function GymCost({ cost, friends }) {

  // processing 
  let total = gymCost(cost, friends);

  // output cost of gym membership
  return (
    <View>
      <Text>
        gymCost({cost},{friends}) returned ${total.toFixed(2)}
      </Text>
    </View>
  );
}
