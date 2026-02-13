import { Text, View } from "react-native";
import { gymCost } from "../gymCost.js";

export function GymCost({ cost, friends }) {
  let total = gymCost(cost, friends);

  return (
    <View>
      <Text>
        gymCost({cost},{friends}) returned ${total.toFixed(2)}
      </Text>
    </View>
  );
}
