import { Text, View } from "react-native";
import { cubeVolume } from "../cubeVolume.js";

// input lenght in meters 
export function CubeVolume({ meters }) {
    
  // processing cubic formula  
  let volume = cubeVolume(meters);
  
  // output 
  return (
    <View>
      <Text>
        cubeVolume({meters}) returned {volume.toFixed(3)} m³
      </Text>
    </View>
  );
}
