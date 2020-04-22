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
      <View>
        <TextInput
          placeholder="Enter a Zip"
          style={styles.zip}
          onChangeText={zipInputHandler}
          value={enteredZip}
        />
        <Button title="Get The Weather!" onPress={addZipHandler} />
      </View>
      <View style={styles.todaysWeather}>
        <Text>Weather Goes Here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    flexDirection: "column",
    padding: 40,
    borderColor: "red",
    borderWidth: 2,
  },
  todaysWeather: {
    flex: 2,
    borderColor: "green",
    borderWidth: 2,
  },
  zip: {
    flex: 1,
    borderColor: "black",
    borderBottomWidth: 1,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

// const [outputText, setOutputText] = useState("Storm'n Lorm'n!");
