import { Hello } from "./Hello.jsx";
import { SnowRemoval } from "./SnowRemoval.jsx";

import { Coins } from "./Coins.jsx";
import { Fahrenheit2Celsius } from "./Fahrenheit2Celsius.jsx";
import { CubeVolume } from "./CubeVolume.jsx";
import { GymCost } from "./GymCost.jsx";
import { EarthquakeDamage } from "./EarthquakeDamage.jsx";

import { View, Text } from "react-native";

export default function App() {
  return (
    <View>
      {/* ORIGINAL REPOSITORY EXAMPLES */}
      <Text>ORIGINAL REPOSITORY EXAMPLES</Text>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />

      <Text>{"\n"}</Text>

      {/* TASK 1 — SET OF COINS IN DOLLARS */}
      <Text>TASK 1 — SET OF COINS IN DOLLARS</Text>
      <Text>
        Instruction: Write at least 3 different variable tests, including 0.
      </Text>

      {/* 0 test */}
      <Coins nickels={0} dimes={0} quarters={0} loonies={0} toonies={0} />

      {/* mixed realistic pocket change */}
      <Coins nickels={3} dimes={0} quarters={2} loonies={1} toonies={0} />

      {/* heavy toonies + quarters */}
      <Coins nickels={0} dimes={4} quarters={6} loonies={0} toonies={3} />

      <Text>{"\n"}</Text>

      {/* TASK 2 — TEMPERATURE CONVERSION F TO C */}
      <Text>TASK 2 — TEMPERATURE CONVERSION F TO C</Text>
      <Text>
        Instruction: Test boiling and freezing water and room temperature (70).
      </Text>

      {/* Freezing */}
      <Fahrenheit2Celsius f={32} />

      {/* Room temp */}
      <Fahrenheit2Celsius f={70} />

      {/* Boiling */}
      <Fahrenheit2Celsius f={212} />

      <Text>{"\n"}</Text>

      {/* TASK 3 — VOLUME CUBE IN METERS CALCULATION */}
      <Text>TASK 3 — VOLUME CUBE IN METERS CALCULATION</Text>
      <Text>Instruction: Test at least 3 different volumes.</Text>

      {/* small cube */}
      <CubeVolume meters={0.25} />

      {/* medium cube */}
      <CubeVolume meters={1.5} />

      {/* bigger cube */}
      <CubeVolume meters={3} />

      <Text>{"\n"}</Text>

      {/* TASK 4 — GYM MEMBERSHIP DISCOUNT */}
      <Text>TASK 4 — GYM MEMBERSHIP DISCOUNT</Text>
      <Text>
        Instruction: Test with 1, 2, 3 and 4 friends.
      </Text>

      <GymCost cost={120} friends={1} />
      <GymCost cost={120} friends={2} />
      <GymCost cost={120} friends={3} />
      <GymCost cost={120} friends={4} />

      <Text>{"\n"}</Text>

      {/* TASK 5 — EARTHQUAKE DAMAGE LEVEL IDENTIFICATION */}
      <Text>TASK 5 — EARTHQUAKE DAMAGE LEVEL IDENTIFICATION</Text>
      <Text>
        Instruction: Determine damage given the intensity measured on the Richter scale.
      </Text>

      {/* Each test hits a different category */}
      <EarthquakeDamage intensity={4.8} />
      <EarthquakeDamage intensity={5.2} />
      <EarthquakeDamage intensity={6.1} />
      <EarthquakeDamage intensity={7.2} />
      <EarthquakeDamage intensity={7.9} />
    </View>
  );
}
