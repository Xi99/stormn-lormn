import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";

//import Carousel from "react-native-carousel-view";
import HourlyWeather from "./HourlyWeather.js";

const deviceWidth = Dimensions.get("window").width;

const CurrentWeather = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const setSelectedEvent = (e) => {
    const viewSize = e.nativeEvent.layoutMeasurement.width;
    const contentOffset = e.nativeEvent.contentOffset.x;
    setCurrentIndex(Math.floor(contentOffset / viewSize));
  };

  const key1 = 1;
  const key2 = 2;
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
            <Text style={styles.degrees}>{props.currentTemp}</Text>
            <Image
              style={styles.image}
              source={{
                uri: `http://openweathermap.org/img/wn/${props.currentWeatherIcon}@2x.png`,
              }}
            />
          </View>

          {props.items.map((item) => (
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
          ))}
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
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "white" }}>
          {props.currentCondition}
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
    // alignContent: "center",
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
    //flexDirection: "column",
    //flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#302E2B",
    //marginLeft: "5%",
    flex: 6,
  },
  degrees: {
    fontSize: 90,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    marginLeft: "3%",
    width: deviceWidth,
    flex: 1,
  },
  image: {
    width: "50%",
    marginRight: "13%",
    // height: 100,
    //alignItems: "center",
    //justifyContent: "center",
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
  },
});

export default CurrentWeather;
