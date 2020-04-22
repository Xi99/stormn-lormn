import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ZipInput = (props) => {
  const [enteredZip, setEnteredZip] = useState("");

  const zipInputHandler = (enteredZip) => {
    setEnteredZip(enteredZip);
  };

  return (
    <View style={styles.zip}>
      <TextInput
        placeholder="Enter a Zip"
        onChangeText={zipInputHandler}
        value={enteredZip}
      />
      <Button
        title="Get The Weather!"
        onPress={() => props.addZip(enteredZip)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    borderColor: "red",
    borderWidth: 2,
    flexBasis: "100%",
    alignContent: "space-around",
  },
  zip: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "flex-end",
    // flexBasis: 100,
    // flex: 0.5,
    marginTop: "5%",
    padding: 5,
    borderColor: "blue",
    borderWidth: 4,
  },
});

export default ZipInput;
