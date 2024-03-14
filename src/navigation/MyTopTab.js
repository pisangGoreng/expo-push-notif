import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Contact from "../screens/Contact";
import Home from "../screens/Home";
import { Colors } from "../constants/colors";

const Tab = createMaterialTopTabNavigator();

export default function MyTopTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarPosition="top"
      screenOptions={{
        tabBarLabelStyle: {},
        tabBarItemStyle: {},
        tabBarIndicatorStyle: {},
        tabBarStyle: { backgroundColor: Colors.primary },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}
