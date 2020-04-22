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

import ZipInput from "./components/ZipInput.js";
import apiToken from "./config";

export default function App() {
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentCondition, setCurrentCondition] = useState("");

  const addZipHandler = (zipcode) => {
    // now we have the zip code to sent to the API call here
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${apiToken.OWM_APP_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentTemp(data.main.temp + "°F"),
          setCurrentCity(data.name),
          setCurrentCondition(data.weather[0].description);
      });
  };
  // setUserZips((currentZips) => [
  //   ...currentZips,
  //   { id: Math.random().toString(), zip: zipcode },
  // ]);

  return (
    <View style={styles.screen}>
      <ZipInput addZip={addZipHandler} />
      <View style={styles.currentWeather}>
        <View style={styles.city}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            {currentCity}
          </Text>
        </View>
        <View style={styles.temp}>
          <Text style={{ fontSize: 70, fontWeight: "bold" }}>
            {currentTemp}
          </Text>
        </View>
        <View style={styles.condition}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            {currentCondition}
          </Text>
        </View>
      </View>
      <View style={styles.currentStats}>
        <View style={styles.stats}>
          <Text>Weather Stats Go Here</Text>
        </View>
        {/* <View style={styles.attire}>
          <Text>Weather Attire Goes Here</Text>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    borderColor: "red",
    borderWidth: 2,
    //flexBasis: "100%",
    alignContent: "space-around",
    height: "100%",
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
  currentWeather: {
    display: "flex",
    flexDirection: "column",
    // flexBasis: "100%",
    alignContent: "center",
    flexWrap: "wrap",
    flex: 4,
    borderColor: "green",
    borderWidth: 2,
  },
  city: {
    justifyContent: "center",
    borderColor: "green",
    alignItems: "center",
    borderWidth: 2,
    width: "100%",
    flex: 2,
  },
  temp: {
    borderColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    // width: Dimensions.get("window").width,
    fontSize: 40,
    borderWidth: 2,
    flex: 7,
  },
  condition: {
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    flex: 2,
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
  currentStats: {
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
