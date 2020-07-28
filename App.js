import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  ImageBackground,
  BackHandler,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./screens/Login";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import ZipInput from "./screens/ZipInput.js";

import CurrentWeather from "./screens/CurrentWeather.js";
import WeatherStats from "./screens/WeatherStats.js";

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0090DA",
            // textAlign: 'center',
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
      >
        <Stack.Screen
          name="ZipInput"
          component={ZipInput}
          options={{
            title: "Enter ZIP",
            headerRight: () => (
              <View style={{ marginRight: 5 }}>
                <Button
                  onPress={() => BackHandler.exitApp()}
                  title="EXIT"
                  color="#191970"
                />
              </View>
            ),
            headerTitleStyle: {
              textAlign: "center",
              marginLeft: 50,
            },
          }}
        />
        <Stack.Screen
          name="CurrentWeather"
          component={CurrentWeather}
          options={{
            title: "Current Weather",
            headerRight: () => (
              <View style={{ marginRight: 5 }}>
                {/* <Button
                  onPress={() => BackHandler.exitApp()}
                  title="EXIT"
                  color="#191970"
                /> */}
              </View>
            ),
            headerTitleStyle: {
              textAlign: "center",
              marginLeft: 50,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.screen}>
    //   <Button
    //     style={styles.modalButton}
    //     title="Choose Another Zipcode"
    //     onPress={() => setIsZip(true)}
    //   />
    //   <ZipInput
    //     visible={isZip}
    //     addZip={addZipHandler}
    //     onCancel={cancelZipHandler}
    //   />

    //   <CurrentWeather
    //     items={[
    //       <Text key={key1} style={{ fontSize: 40, color: "white" }}>
    //         24 Hour Weather
    //       </Text>,
    //       "7 Day Forecast",
    //       cruiseCris,
    //     ]}
    //     // <Text style={{ fontSize: 40, color: "white" }}>7 Day Forecast</Text>,
    //     currentCity={currentCity}
    //     currentTemp={currentTemp}
    //     currentCondition={currentCondition}
    //     currentWeatherIcon={currentWeatherIcon}
    //   />

    //   <WeatherStats
    //     currentFeelsLike={currentFeelsLike}
    //     currentHumidity={currentHumidity}
    //     currentTempMin={currentTempMin}
    //     currentTempMax={currentTempMax}
    //     currentSunrise={currentSunrise}
    //     currentSunset={currentSunset}
    //   />
    //   {/* <View style={styles.attire}>
    //       <Text>Weather Attire Goes Here</Text>
    //     </View> */}
    // </View>
  );
};

export default App;
