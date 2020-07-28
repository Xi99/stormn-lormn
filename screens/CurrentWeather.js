import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";

import apiToken from "../config";

//import Carousel from "react-native-carousel-view";
import HourlyWeather from "./HourlyWeather.js";
import { add } from "react-native-reanimated";

const deviceWidth = Dimensions.get("window").width;

const CurrentWeather = ({ navigation, route }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enteredZip, setEnteredZip] = useState("");
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

  const setSelectedEvent = (e) => {
    const viewSize = e.nativeEvent.layoutMeasurement.width;
    const contentOffset = e.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.floor(contentOffset / viewSize));
  };

  //TODO: useEffect() here
  useEffect(() => {
    addZipHandler(route.params.zip);
    console.log(currentWeatherIcon);
  }, []);
  const addZipHandler = (zipcode) => {
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

  return (
    <View style={styles.currentWeather}>
      <View style={styles.city}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>
          {currentCity}
        </Text>
      </View>
      <View style={styles.temp}>
        <Text style={styles.degrees}>{currentTemp}</Text>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.image}
          source={{
            uri: `http://openweathermap.org/img/wn/${currentWeatherIcon}@2x.png`,
          }}
        />
      </View>
      <View style={styles.condition}>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
          {currentCondition}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentWeather: {
    flexDirection: "column",
    // justifyContent: "center",
    // alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 4,
    height: "100%",
    width: "100%",
    borderColor: "orange",
    // borderWidth: 2,
    backgroundColor: "#302E2B",
  },
  city: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#302E2B",
    // borderColor: "red",
    // borderWidth: 2,
  },
  temp: {
    //flexDirection: "column",
    //flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#302E2B",
    //marginLeft: "5%",
    flex: 1,
    // borderWidth: 2,
    // borderColor: "purple",
  },
  degrees: {
    fontSize: 90,
    fontWeight: "bold",
    color: "white",
    alignItems: "center",
    // justifyContent: "center",
    // marginLeft: "5%",
    // width: deviceWidth,
    // borderWidth: 2,
    // borderColor: "yellow",
    flex: 1,
  },
  image: {
    width: "60%",
    // marginRight: "13%",
    // backgroundColor: "green",
    // borderColor: "green",
    // borderWidth: 2,
    alignSelf: "center",
    flex: 1,
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    height: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#0090DA",
  },
  condition: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#302E2B",
    borderColor: "blue",
    // borderWidth: 2,
  },
});

export default CurrentWeather;

{
  /* {items.map((item) => (
            <Text
              key={item.key}
              style={{
                width: deviceWidth,
                height: "100%",
                fontSize: 40,
                color: "white",
              }}
            >
              {item}
            </Text>
          ))} */
}

{
  /* <View style={styles.circleDiv}> */
}
{
  /* {items.map((item, i) => (
            <View
              key={item}
              style={[
                styles.whiteCircle,
                { opacity: i === currentIndex ? 1 : 0.3 },
              ]}
            />
          ))} */
}
