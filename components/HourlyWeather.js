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
//const deviceWidth = Dimensions.get("window").width;

const HourlyWeather = (props) => {
  //const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Text>24 Hour Weather</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderWidth: 3,
  },
});

export default HourlyWeather;
