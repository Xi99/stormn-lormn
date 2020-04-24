import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
const deviceWidth = Dimensions.get("window").width;
//const cruiseChris = "../Images/cruiseChris.JPG";

const CurrentWeather = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const setSelectedEvent = (e) => {
    const viewSize = e.nativeEvent.layoutMeasurement.width;
    const contentOffset = e.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.floor(contentOffset / viewSize));
  };
  return (
    <View style={styles.currentWeather}>
      <View style={styles.city}>
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>
          {props.currentCity}
        </Text>
      </View>
      <View style={styles.temp}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={setSelectedEvent}
        >
          <View>
            <Text
              style={{
                fontSize: 80,
                fontWeight: "bold",
                color: "white",
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
    alignItems: "stretch",
    flex: 4,
    height: "100%",
    width: "100%",
  },
  scrollArea: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    width: "100%",
    backgroundColor: "#302E2B",
  },
  city: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: "#302E2B",
  },
  temp: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#302E2B",
    fontSize: 40,
    flex: 8,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
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
  },
});

export default CurrentWeather;
