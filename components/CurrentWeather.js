import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
const deviceWidth = Dimensions.get("window").width;

const CurrentWeather = (props) => {
  return (
    <View style={styles.currentWeather}>
      {/* <ScrollView style={styles.scrollArea}> */}
      <View style={styles.city}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          {props.currentCity}
        </Text>
      </View>
      <View style={styles.temp}>
        <ScrollView horizontal pagingEnabled>
          {props.items.map((item) => (
            <Text style={{ width: deviceWidth, height: "100%" }}>{item}</Text>
          ))}
          {/* <Text style={{ fontSize: 70, fontWeight: "bold" }}>
            {props.currentTemp}
          </Text>
          <Image
            style={styles.image}
            source={{
              uri: `http://openweathermap.org/img/wn/${props.currentWeatherIcon}@2x.png`,
            }}
          /> */}
        </ScrollView>
      </View>
      <View style={styles.condition}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          {props.currentCondition}
        </Text>
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  currentWeather: {
    // display: "flex",
    // flexDirection: "column",
    // //flexBasis: "100%",
    alignItems: "stretch",
    // alignContent: "center",
    // flexWrap: "wrap",
    flex: 4,
    height: "100%",
    width: "100%",
    borderColor: "green",
    borderWidth: 2,
  },
  scrollArea: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    width: "100%",
    // alignItems: "stretch",
    //height: "100%",
    borderColor: "purple",
    borderWidth: 3,
  },
  city: {
    justifyContent: "center",
    borderColor: "green",
    alignItems: "center",
    borderWidth: 2,
    width: "100%",
    flex: 1,
  },
  temp: {
    borderColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    // height: "100%",
    // width: "100%",
    // width: Dimensions.get("window").width,
    fontSize: 40,
    borderWidth: 2,
    flex: 8,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  condition: {
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    flex: 1,
  },
});

export default CurrentWeather;
