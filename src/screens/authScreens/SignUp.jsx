import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "../../styles/global";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

export default function SignUp({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label={"email"} />
      <MyInput label={"password"} secureTextEntry={true} />
      <MyButton title={"Sign Up"} />
      <MyButton title={"Login"} onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
