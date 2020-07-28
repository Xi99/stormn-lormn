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
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

import ZipInput from "./screens/ZipInput.js";

import CurrentWeather from "./screens/CurrentWeather.js";
import WeatherStats from "./screens/WeatherStats.js";

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#0090DA",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
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
        headerLeft: () => (
          <View style={{ marginLeft: 5 }}>
            <Button
              onPress={() => navigation.toggleDrawer()}
              title="III"
              color="green"
            />
          </View>
        ),
        headerTitleStyle: {
          textAlign: "center",
          // marginLeft: 50,
          fontWeight: "bold",
          fontSize: 30,
        },
      }}
    />
    <HomeStack.Screen
      name="CurrentWeather"
      component={CurrentWeather}
      options={{
        title: "Current Weather",
        headerTitleStyle: {
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          marginRight: 35,
        },
      }}
    />
  </HomeStack.Navigator>
);

const LoginStackScreen = ({ navigation }) => (
  <LoginStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#0090DA",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{
        title: "Login",
        headerTitleStyle: {
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 30,
          // marginRight: 35,
        },
      }}
    />
  </LoginStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ZipInput">
        <Drawer.Screen name="Enter A ZIP" component={HomeStackScreen} />
        <Drawer.Screen name="Login" component={LoginStackScreen} />
      </Drawer.Navigator>
      {/* <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0090DA",
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
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="CurrentWeather"
          component={CurrentWeather}
          options={{
            title: "Current Weather",
            headerTitleStyle: {
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
