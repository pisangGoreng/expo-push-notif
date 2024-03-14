import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import MyStack from "./MyStack";
import MyBottomTab from "./MyBottomTab";
import MyDrawer from "./MyDrawer";
import SignUp from "../screens/authScreens/SignUp";
import AuthStack from "./AuthStack";
import { restoreToken } from "../features/auth/auth";
import Splash from "../screens/Splash";

export default function RootNavigator() {
  const dispatch = useDispatch();
  const { userToken, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    getValue();
  }, []);

  async function getValue() {
    // * check existing token
    try {
      const value = await AsyncStorage.getItem("@token");
      if (value !== null) {
        console.log("data restored", value);
        dispatch(restoreToken(value));
        return value;
      } else {
        console.log("no data");
        dispatch(restoreToken(null));
      }
    } catch (error) {
      console.log(error);
    }
  }
  // * Show this component while getValue is running
  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      {/* IF ELSE disini untuk  Stack apa yg diaktifkan apabila user telah login */}
      {userToken ? <MyDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
}

{
  /* <NavigationContainer>
  <MyDrawer />
  <MyStack />
  <MyBottomTab />
</NavigationContainer>; */
}
