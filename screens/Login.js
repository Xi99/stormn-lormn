/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from "react";
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
  const handleLogin = () => {
    console.warn("Logged in");
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
        <Button title="Login" color="orange" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});
