import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherStats = (props) => {
  return (
    <View style={styles.currentStats}>
      <View style={styles.stats}>
        <Text>Weather Stats Go Here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stats: {
    // display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    borderColor: "yellow",
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

export default WeatherStats;
