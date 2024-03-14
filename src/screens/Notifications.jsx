import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function Notifications() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Notifications</Text>
    </View>
  );
}
