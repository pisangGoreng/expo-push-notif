import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function Settings() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Settings</Text>
    </View>
  );
}
