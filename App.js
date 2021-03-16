import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

import WelcomeScreen from "./App/assets/Screens/WelcomeScreen";
import HomeScreen from "./App/assets/Screens/HomeScreen";

import SignupScreen from "./App/assets/Screens/SignupScreen";
import AuthNavigator from "./App/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import FileTicketScreen from "./App/assets/Screens/FileTicketScreen";
import HowtoUseScreen from "./App/assets/HowtoUseScreen";
import AppNavigator from "./App/navigation/AppNavigator";
import AppStackNavigator from "./App/navigation/AppStackNavigator";
import Demo from "./App/navigation/Demo";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    margin: 100,
  },
});
