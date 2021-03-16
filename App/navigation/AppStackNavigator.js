import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FileTicketScreen from "../assets/Screens/FileTicketScreen";
import HowtoUseScreen from "../assets/HowtoUseScreen";
import HomeScreen from "../assets/Screens/HomeScreen";

const Stack = createStackNavigator();

const AppStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="File a New Ticket" component={FileTicketScreen} />
    <Stack.Screen name="How to Use this App" component={HowtoUseScreen} />
  </Stack.Navigator>
);

export default AppStackNavigator;
