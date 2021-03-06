import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const WeatherStats = (props) => {
  const unixConverter = (sun) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(sun * 1000);
    // Hours part from the timestamp
    var hours = date.getHours() % 12;
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  };

  let sunset = unixConverter(props.currentSunset);
  let sunrise = unixConverter(props.currentSunrise);

  return (
    <View style={styles.currentStats}>
      <View style={styles.feels_like}>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Feels Like
        </Text>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            //alignSelf: "center",
          }}
        >
          {props.currentFeelsLike}
        </Text>
      </View>
      <View style={styles.tempMax}>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 14,
          }}
        >
          Max Temperature
        </Text>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            //alignSelf: "center",
          }}
        >
          {props.currentTempMax}
        </Text>
      </View>
      <View style={styles.sunset}>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Sunset
        </Text>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          {sunset.slice(0, 4)}pm
        </Text>
      </View>
      <View style={styles.humidity}>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Humidity
        </Text>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          {props.currentHumidity}
        </Text>
      </View>
      <View style={styles.tempMin}>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 14,
          }}
        >
          Min Temperature
        </Text>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          {props.currentTempMin}
        </Text>
      </View>
      <View style={styles.sunrise}>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          Sunrise
        </Text>
        <Text
          style={{
            flex: 1,
            color: "white",
            fontWeight: "bold",
            width: "100%",
            alignSelf: "center",
            fontSize: 18,
          }}
        >
          {sunrise.slice(0, 4)}am
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feels_like: {
    padding: 5,
    flexWrap: "wrap",
    width: "33.3%",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#0090DA",
  },
  tempMax: {
    padding: 5,
    flexDirection: "column",
    flexWrap: "wrap",
    width: "33.3%",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#0090DA",
  },
  sunset: {
    padding: 5,
    flexDirection: "column",
    width: "33.3%",
    flexWrap: "wrap",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#0090DA",
  },
  humidity: {
    padding: 5,
    flexDirection: "column",
    flexWrap: "wrap",
    width: "33.3%",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#0090DA",
  },
  tempMin: {
    padding: 5,
    flexDirection: "column",
    flexWrap: "wrap",
    width: "33.3%",
    //alignContent: "center",
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#0090DA",
  },
  sunrise: {
    padding: 5,
    flexDirection: "column",
    width: "33.3%",
    flexWrap: "wrap",
    borderColor: "white",
    borderWidth: 1,
    alignContent: "center",
    backgroundColor: "#0090DA",
  },
  currentStats: {
    margin: 3,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignContent: "stretch",
    flex: 1,
    backgroundColor: "#0090DA",
    //borderWidth: 4,
  },
});

export default WeatherStats;
