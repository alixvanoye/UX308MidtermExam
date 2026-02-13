import { Text, View } from "react-native";
import { earthquakeDamage } from "../earthquakeDamage.js";

// input earthquake scale number
export function EarthquakeDamage({ intensity }) {

  // processing 
  let result = earthquakeDamage(intensity);

  // output intensity description
  return (
    <View>
      <Text>
        earthquakeDamage({intensity}) returned {result}
      </Text>
    </View>
  );
}
