import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
          placeholder="Enter a Zip"
          style={{ borderColor: "black", borderBottomWidth: 1 }}
        />
        <Button title="Get The Weather!" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});

// const [outputText, setOutputText] = useState("Storm'n Lorm'n!");
