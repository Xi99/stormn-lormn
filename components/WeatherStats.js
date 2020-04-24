import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const WeatherStats = (props) => {
  const unixConverter = (sun) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(sun * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
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
        <Text style={{ flex: 1 }}>Feels Like</Text>
        <Text style={{ flex: 1 }}>{props.currentFeelsLike}</Text>
      </View>
      <View style={styles.tempMax}>
        <Text style={{ flex: 1 }}>Max Temperature</Text>
        <Text style={{ flex: 1 }}>{props.currentTempMax}</Text>
      </View>
      <View style={styles.sunset}>
        <Text style={{ flex: 1 }}>Sunset</Text>
        <Text style={{ flex: 1 }}>{sunset}</Text>
      </View>
      <View style={styles.humidity}>
        <Text style={{ flex: 1 }}>Humidity</Text>
        <Text style={{ flex: 1 }}>{props.currentHumidity}</Text>
      </View>
      <View style={styles.tempMin}>
        <Text style={{ flex: 1 }}>Min Temperature</Text>
        <Text style={{ flex: 1 }}>{props.currentTempMin}</Text>
      </View>
      <View style={styles.sunrise}>
        <Text style={{ flex: 1 }}>Sunrise</Text>
        <Text style={{ flex: 1 }}>{sunrise}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feels_like: {
    // display: "flex",
    flexDirection: "column",
    //flex: 1,
    //height: "100%",
    flexWrap: "wrap",
    width: "33.3%",
    borderColor: "yellow",
    borderWidth: 4,
  },
  tempMax: {
    // display: "flex",
    flexDirection: "column",
    //flex: 1,
    flexWrap: "wrap",
    //height: "100%",
    width: "33.3%",
    borderColor: "blue",
    borderWidth: 4,
  },
  sunset: {
    // display: "flex",
    flexDirection: "column",
    //flex: 1,
    width: "33.3%",
    flexWrap: "wrap",
    //height: "100%",
    borderColor: "red",
    borderWidth: 4,
  },
  humidity: {
    // display: "flex",
    flexDirection: "column",
    //flex: 1,
    flexWrap: "wrap",
    width: "33.3%",
    //height: "100%",
    borderColor: "green",
    borderWidth: 4,
  },
  tempMin: {
    // display: "flex",
    flexDirection: "column",
    //flex: 1,
    flexWrap: "wrap",
    width: "33.3%",
    //height: "100%",
    borderColor: "orange",
    borderWidth: 4,
  },
  sunrise: {
    // display: "flex",
    flexDirection: "column",
    //flex: 1,
    width: "33.3%",
    flexWrap: "wrap",
    //height: "100%",
    borderColor: "black",
    borderWidth: 4,
  },
  currentStats: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    //alignItems: "stretch",
    alignContent: "stretch",
    flex: 1,
    borderColor: "purple",
    borderWidth: 4,
  },
});

export default WeatherStats;