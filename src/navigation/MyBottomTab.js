import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import MyStack from "./MyStack.js";
import { Colors } from "../constants/colors";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyTopTab from "./MyTopTab";

const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
  const navigation = useNavigation();

  return (
    <MyTab.Navigator
      initialRouteName="MyTopTab"
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <MyTab.Screen
        name="MyTopTab"
        component={MyTopTab}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome
                name="align-left"
                style={{ marginLeft: 15 }}
                size={28}
                color={Colors.secondary}
              />
            </Pressable>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Settings")}>
              <FontAwesome
                name="cog"
                style={{ marginRight: 15 }}
                size={28}
                color={Colors.secondary}
              />
            </Pressable>
          ),
          tabBarIcon: () => <FontAwesome name="home" size={30} color="black" />,
        }}
      />
      <MyTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 3, // for notification badge
          tabBarBadgeStyle: { backgroundColor: "tomato" },
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
        }}
      />
    </MyTab.Navigator>
  );
}
