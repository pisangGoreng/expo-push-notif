import { createDrawerNavigator } from "@react-navigation/drawer";

import Notifications from "../screens/Notifications";
import MyStack from "./MyStack";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useWindowDimensions } from "react-native";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: Colors.secondary,
        drawerType: width >= 768 ? "permanent" : "front",
      }}
    >
      <Drawer.Screen
        name="Stack"
        component={MyStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
