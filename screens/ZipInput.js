import React, { useState } from "react";
//import brick from "../Images/pirateChris.jpg";
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  ImageBackground,
  StyleSheet,
} from "react-native";

const ZipInput = ({ navigation }) => {
  const [enteredZip, setEnteredZip] = useState("");

  const zipInputHandler = (enteredZip) => {
    setEnteredZip(enteredZip);
  };

  const addZipInputHandler = () => {
    // setEnteredZip("");
    // addZip(enteredZip);
    // console.warn(enteredZip);
    navigation.navigate("CurrentWeather", { zip: enteredZip });
  };

  const onCancel = () => {
    setEnteredZip("");
  };

  return (
    <ImageBackground
      source={require("../Images/cruiseChris.jpg")}
      //resizeMode="cover"
      style={styles.background}
    >
      <View>
        {/* <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            Storm'n Lorm'n
          </Text> */}
      </View>
      <View style={styles.zip}>
        <TextInput
          style={{
            color: "white",
            fontSize: 70,
            textAlign: "center",
            //marginLeft: "3%",
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "center",
            marginBottom: 10,
            width: "100%",
          }}
          placeholder="Enter a Zip"
          onChangeText={zipInputHandler}
          value={enteredZip}
        />
        <View style={styles.buttonContainer}>
          <Button
            style={{ marginBottom: 10, elevation: 6 }}
            title="Get The Weather!"
            color="#0090DA"
            onPress={addZipInputHandler}
          />
          <Button title="cancel" color="red" onPress={onCancel} />
        </View>
      </View>
    </ImageBackground>
    // </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    color: "white",
    width: "100%",
    height: "100%",
  },
  zip: {
    flex: 1,
    color: "white",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    // justifyContent: "flex-start",
    marginTop: "5%",
    padding: 5,
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "60%",
    elevation: 5,
  },
});

export default ZipInput;

/*

const styles = StyleSheet.create({
  screen: {
    alignContent: "space-around",
    height: "100%",
    marginTop: "6%",
  },
  modalButton: {
    marginTop: "50%",
  },
  stats: {
    flexDirection: "column",
    flex: 1,
    height: "100%",
  },
  attire: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
  },
  currentStats: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
});
*/
