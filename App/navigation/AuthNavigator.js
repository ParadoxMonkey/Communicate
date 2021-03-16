import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignupScreen from "../assets/Screens/SignupScreen";
import WelcomeScreen from "../assets/Screens/WelcomeScreen";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignupScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HomeScreen"
      component={AppNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
