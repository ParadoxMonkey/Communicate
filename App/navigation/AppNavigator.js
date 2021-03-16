import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HowtoUseScreen from "../assets/HowtoUseScreen";
import FileTicketScreen from "../assets/Screens/FileTicketScreen";
import AppStackNavigator from "./AppStackNavigator";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={AppStackNavigator}
      options={{
        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons
            name="home"
            color={colors.primary}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Your Account"
      component={AppStackNavigator}
      options={{
        tabBarIcon: ({ size }) => (
          <MaterialCommunityIcons
            name="account"
            color={colors.primary}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="File Ticket"
      component={FileTicketScreen}
      options={{
        tabBarIcon: ({ size }) => (
          <Entypo name="ticket" color={colors.primary} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="How to Use this App"
      component={HowtoUseScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="help" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
