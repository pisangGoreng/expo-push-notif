import { View, Text } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { globalStyles } from "../../styles/global";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import { signIn } from "../../features/auth/auth";

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  const save = async (value) => {
    try {
      await AsyncStorage.setItem("@token", value);
      dispatch(signIn(value));
      console.log("data saved");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label={"email"} value={token} onChangeText={setToken} />
      <MyInput label={"password"} secureTextEntry={true} />
      <MyButton title={"Sign In"} onPress={() => save(token)} />
      <MyButton
        title={"Sign Up"}
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
