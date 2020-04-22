import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredZip, setEnteredZip] = useState("");
  const [userZips, setUserZips] = useState([]);

  const zipInputHandler = (enteredZip) => {
    setEnteredZip(enteredZip);
  };

  const addZipHandler = () => {
    setUserZips((currentZips) => [
      ...currentZips,
      { id: Math.random().toString(), zip: enteredZip },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.zip}>
        <TextInput
          placeholder="Enter a Zip"
          onChangeText={zipInputHandler}
          value={enteredZip}
        />
        <Button title="Get The Weather!" onPress={addZipHandler} />
      </View>
      <View style={styles.todaysWeather}>
        <Text>Weather Goes Here</Text>
      </View>
      <View style={styles.todaysStats}>
        <View style={styles.stats}>
          <Text>Weather Stats Go Here</Text>
        </View>
        <View style={styles.attire}>
          <Text>Weather Attire Goes Here</Text>
        </View>
      </View>
    </View>
  );
}

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
  todaysWeather: {
    display: "flex",
    flexDirection: "row",
    // flexBasis: "100%",
    // justifyContent: "flex-start",
    alignContent: "flex-start",
    flexWrap: "nowrap",
    flex: 4,
    width: "100%",
    borderColor: "green",
    borderWidth: 2,
  },
  stats: {
    // display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    borderColor: "yellow",
    borderWidth: 4,
  },
  attire: {
    // display: "flex",
    flex: 1,
    height: "100%",
    flexDirection: "column",
    borderColor: "orange",
    borderWidth: 4,
  },
  todaysStats: {
    display: "flex",
    flexDirection: "column",
    // flexBasis: "100%",
    flex: 1,
    borderColor: "purple",
    borderWidth: 4,
  },
  // listItem: {
  //   padding: 10,
  //   marginVertical: 10,
  //   backgroundColor: "#ccc",
  //   borderColor: "black",
  //   borderWidth: 1,
  // },
});

// const [outputText, setOutputText] = useState("Storm'n Lorm'n!");
