import { Text, View } from "react-native";
import { fahrenheit2celsius } from "../fahrenheit2celsius.js";

// input temperature in fahrenheit
export function Fahrenheit2Celsius({ f }) {

// processing 
  let c = fahrenheit2celsius(f);

// output temperature in celsius
  return (
    <View>
      <Text>
        fahrenheit2celsius({f}) returned {c.toFixed(2)}°C
      </Text>
    </View>
  );
}
