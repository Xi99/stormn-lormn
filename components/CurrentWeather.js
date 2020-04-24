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
//const [currentIndex, setCurrentIndex] = useState(0);

const CurrentWeather = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let selectedIndex = 0;
  const setSelectedEvent = (e) => {
    const viewSize = e.nativeEvent.layoutMeasurement.width;
    const contentOffset = e.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.floor(contentOffset / viewSize));
  };
  return (
    <View style={styles.currentWeather}>
      {/* <ScrollView style={styles.scrollArea}> */}
      <View style={styles.city}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          {props.currentCity}
        </Text>
      </View>
      <View style={styles.temp}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={setSelectedEvent}
        >
          <View
            style={{
              borderColor: "blue",
              borderWidth: 3,
              //flexDirection: "column",
              //flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                fontSize: 80,
                fontWeight: "bold",
                width: deviceWidth,
                flex: 1,
              }}
            >
              {props.currentTemp}
              <Image
                style={styles.image}
                source={{
                  uri: `http://openweathermap.org/img/wn/${props.currentWeatherIcon}@2x.png`,
                }}
              />
            </Text>
          </View>
          {props.items.map((item) => (
            <Text key={item} style={{ width: deviceWidth, height: "100%" }}>
              {item}
            </Text>
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
        <View style={styles.circleDiv}>
          {props.items.map((item, i) => (
            <View
              key={item}
              style={[
                styles.whiteCircle,
                { opacity: i === currentIndex ? 1 : 0.3 },
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.condition}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
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
    flexDirection: "column",
    flexWrap: "wrap",
    borderColor: "yellow",
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
    borderColor: "red",
    borderWidth: 2,
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
    backgroundColor: "black",
  },
  condition: {
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 2,
    flex: 1,
    backgroundColor: "grey",
  },
});

export default CurrentWeather;
