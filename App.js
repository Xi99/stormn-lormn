import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  ImageBackground,
  BackHandler,
} from "react-native";

import ZipInput from "./screens/ZipInput.js.js";
import apiToken from "./config";
import CurrentWeather from "./screens/CurrentWeather.js";
import WeatherStats from "./screens/WeatherStats.js.js";

export default function App() {
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [currentCondition, setCurrentCondition] = useState("");
  const [currentFeelsLike, setCurrentFeelsLike] = useState("");
  const [currentHumidity, setCurrentHumidity] = useState("");
  const [currentTempMin, setCurrentTempMin] = useState("");
  const [currentTempMax, setCurrentTempMax] = useState("");
  const [currentSunrise, setCurrentSunrise] = useState("");
  const [currentSunset, setCurrentSunset] = useState("");
  const [currentWindSpeed, setCurrentWindSpeed] = useState("");
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState("");

  const [isZip, setIsZip] = useState(true);

  const key1 = 1;
  const key2 = 2;
  const cruiseCris = "./Images/cruiseChris.JPG";
  const addZipHandler = (zipcode = "80304") => {
    // now we have the zip code to sent to the API call here
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${apiToken.OWM_APP_TOKEN}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCurrentTemp(data.main.temp + "°F"),
          setCurrentCity(data.name),
          setCurrentCondition(data.weather[0].description),
          setCurrentFeelsLike(data.main.feels_like + "°F"),
          setCurrentHumidity(data.main.humidity + "%"),
          setCurrentTempMin(data.main.temp_min + "°F"),
          setCurrentTempMax(data.main.temp_max + "°F"),
          setCurrentSunrise(data.sys.sunrise),
          setCurrentSunset(data.sys.sunset),
          setCurrentWindSpeed(data.wind.speed),
          setCurrentWeatherIcon(data.weather[0].icon);
      });
    setIsZip(false);
  };

  const cancelZipHandler = () => {
    setIsZip(false);
  };
  return (
    <View style={styles.screen}>
      <Button
        style={styles.modalButton}
        title="Choose Another Zipcode"
        onPress={() => setIsZip(true)}
      />
      <ZipInput
        visible={isZip}
        addZip={addZipHandler}
        onCancel={cancelZipHandler}
      />

      <CurrentWeather
        items={[
          <Text key={key1} style={{ fontSize: 40, color: "white" }}>
            24 Hour Weather
          </Text>,
          "7 Day Forecast",
          cruiseCris,
        ]}
        // <Text style={{ fontSize: 40, color: "white" }}>7 Day Forecast</Text>,
        currentCity={currentCity}
        currentTemp={currentTemp}
        currentCondition={currentCondition}
        currentWeatherIcon={currentWeatherIcon}
      />

      <WeatherStats
        currentFeelsLike={currentFeelsLike}
        currentHumidity={currentHumidity}
        currentTempMin={currentTempMin}
        currentTempMax={currentTempMax}
        currentSunrise={currentSunrise}
        currentSunset={currentSunset}
      />
      {/* <View style={styles.attire}>
          <Text>Weather Attire Goes Here</Text>
        </View> */}
    </View>
  );
}

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
