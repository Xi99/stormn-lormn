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
import CurrentWeather from "./components/CurrentWeather.js";
import WeatherStats from "./components/WeatherStats.js";

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
      <CurrentWeather
        currentCity={currentCity}
        currentTemp={currentTemp}
        currentCondition={currentCondition}
      />
      <WeatherStats />
      {/* <View style={styles.attire}>
          <Text>Weather Attire Goes Here</Text>
        </View> */}
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
});
