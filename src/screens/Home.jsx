import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useDrawerStatus } from "@react-navigation/drawer";
import Card from "../components/Card";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Notifications from "expo-notifications";
import * as Notification from "expo-notifications";
import MyButton from "../components/MyButton";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Home() {
  const navigator = useNavigation();
  const isDrawerOpen = useDrawerStatus();
  const [date, setDate] = React.useState(new Date());
  const [notificationType, setNotificationType] = React.useState("default");

  React.useEffect(() => {
    checkFistLaunch();
  }, []);

  async function checkFistLaunch() {
    // * check user sdh pernah buka aplikasi ini apa blm,
    // * karena mau minta enable untuk push notifification
    const firstLaunch = await AsyncStorage.getItem("@firstLaunch");
    if (firstLaunch) {
      return;
    } else {
      await AsyncStorage.setItem("@firstLaunch", "true");
      navigator.navigate("Onboarding");
    }
  }

  async function handleNotification() {
    try {
      const trigger = new Date(date).getTime() + 24 * 60 * 60 * 1000;
      const id = await Notification.scheduleNotificationAsync({
        content: {
          title: "ini title loh",
          body: "ini body loh",
        },
        // trigger,
        trigger: {
          seconds: 3,
          repeats: false,
        },
      });
      alert(`Notification shcedualed!, ${id}`);
    } catch (error) {
      console.log(
        "🚀 ~ file: Home.jsx:50 ~ handleNotification ~ error:",
        error
      );
      alert("The notification failed to schedule, make sure the hour is valid");
    }
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>{notificationType}</Text>
      <DateTimePicker
        value={date}
        style={{ width: "25%" }}
        mode={"time"}
        onChange={(event, selectedDate) => setDate(selectedDate)}
      />
      <MyButton title={"Schedule Notification"} onPress={handleNotification} />
      <Card />
    </View>
  );
}
