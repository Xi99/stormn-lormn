import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const CurrentWeather = (props) => {
  return (
    <View style={styles.currentWeather}>
      <View style={styles.city}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          {props.currentCity}
        </Text>
      </View>
      <View style={styles.temp}>
        <Text style={{ fontSize: 70, fontWeight: "bold" }}>
          {props.currentTemp}
        </Text>
      </View>
      <View style={styles.condition}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          {props.currentCondition}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default CurrentWeather;
