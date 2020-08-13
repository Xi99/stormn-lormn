/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

// import {AuthContext} from '../contexts/AuthContext';

export default function Login({ navigation }) {
  const [username, setUsername] = useState("Not Fred");
  const handleLogin = () => {
    console.warn("Logged in");
  };

  // useEffect(() => {
  //   console.log("loading Users...");
  //   getUsers();
  // }, []);

  const getUsers = () => {
    fetch(`http://192.168.0.10:8080/users`, {
      // fetch("https://swapi.dev/api/people/1/", {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        Authorization: `BasicAuth`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // .then((response) => response.json())
      .then((response) => {
        if (!response.ok) throw new Error(response.status);
        return response.json();
      })
      .then((data) => setUsername(data[0].username))
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, textAlign: "center" }}>Username</Text>
      <TextInput
        style={{
          color: "black",
          fontSize: 40,
          textAlign: "center",
          //marginLeft: "3%",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          marginBottom: 10,
          width: "80%",
          borderWidth: 1,
          borderColor: "black",
        }}
        // placeholder="Enter a Zip"
        // onChangeText={zipInputHandler}
        // value={enteredZip}
      />
      <Text style={{ fontSize: 30, textAlign: "center" }}>Password</Text>
      <TextInput
        style={{
          color: "black",
          fontSize: 40,
          textAlign: "center",
          //marginLeft: "3%",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          marginBottom: 10,
          width: "80%",
          borderWidth: 1,
          borderColor: "black",
        }}
        // placeholder="Enter a Zip"
        // onChangeText={zipInputHandler}
        // value={enteredZip}
      />

      <View style={{ width: "80%", alignSelf: "center", marginTop: 10 }}>
        <Button title="Greatness Awaits" color="orange" onPress={getUsers} />
        <Text>{username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
