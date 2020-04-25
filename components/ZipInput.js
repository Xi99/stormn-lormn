import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet } from "react-native";

const ZipInput = (props) => {
  const [enteredZip, setEnteredZip] = useState("");

  const zipInputHandler = (enteredZip) => {
    setEnteredZip(enteredZip);
  };

  const addZipHandler = () => {
    props.addZip(enteredZip);
    setEnteredZip("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.zip}>
        <TextInput
          style={{ fontSize: 70, marginLeft: "22%", marginBottom: 10 }}
          placeholder="Enter a Zip"
          onChangeText={zipInputHandler}
          value={enteredZip}
        />
        <Button
          style={{ marginBottom: 10 }}
          title="Get The Weather!"
          onPress={addZipHandler}
        />
        <Button title="cancel" color="red" onPress={props.onCancel} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // screen: {
  //   flexBasis: "100%",
  //   alignContent: "space-around",
  // },
  zip: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: "flex-start",
    marginTop: "5%",
    padding: 5,
    fontSize: 30,
  },
});

export default ZipInput;
