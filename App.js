import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Wizard, Step, Controls, useControls } from "react-decision-tree-flow";

export default function App() {
  const tree = {
    step1: ["step2"],
    step2: ["step3", "error"],
    step3: [],
    error: ["step2"],
  };

  return (
    <View style={styles.container}>
      <Wizard tree={tree} first="step1">
        <Step name="step1">
          <View>
            <Text>I am step 1</Text>

            <Controls>
              {({ destinations: { step2 } }) => (
                <Button title={"Go to Step 2"} onClick={step2} />
              )}
            </Controls>
          </View>
        </Step>
        <Step name="step2">
          <View>
            <Text>I am step 2</Text>
            <Controls>
              {({ destinations: { step3, error } }) => (
                <View>
                  <Button title={"Go to error"} onClick={error} />
                  <Button title={"Go to Step 3"} onClick={step3} />
                </View>
              )}
            </Controls>
          </View>
        </Step>
        <Step name="step3">
          <View>
            <Text>I am step 3. No steps after me!</Text>
          </View>
        </Step>
        <Step name="error">
          <View>
            I am error
            <Controls>
              {({ back }) => (
                <Button title={"Go back to Step 2"} onClick={back} />
              )}
            </Controls>
          </View>
        </Step>
      </Wizard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
