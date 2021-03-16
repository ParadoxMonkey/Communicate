import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";

import ListItem from "../../components/ListItem";
import colors from "../../config/colors";

const items = [
  {
    id: 1,
    title: "Your Account",
    description: "Access and edit your information",
    image: require("../ReactNativeTestBackground.jpg"),
    targetScreen: "HomeScreen",
  },
  {
    id: 2,
    title: "File a ticket",
    description: "Tell us about a problem that you need help with",
    image: require("../favicon.png"),
    targetScreen: "File a New Ticket",
  },
  {
    id: 3,
    title: "How to use this app",
    description:
      "Click here if you need help understanding the functionalities of this app",
    image: require("../icon.png"),
    targetScreen: "How to Use this App",
  },
];

function HomeScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Text style={styles.headingText}>Home</Text>

      <FlatList
        style={styles.list}
        data={items}
        keyExtractor={(items) => items.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("Clicked")}
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            styles={{ width: "100%", height: 1, backgroundColor: "yellow" }}
          />
        )}
      />

      <View style={styles.bottomLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1e1f1e",
    paddingTop: Constants.statusBarHeight,
  },

  bottomLine: {
    width: "100%",
    height: 2,
    backgroundColor: "#000",
    position: "relative",
    bottom: 100,
  },

  headingText: {
    fontSize: 44,
    fontWeight: "700",
    color: colors.orange,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 10,
  },

  list: {},
});

export default HomeScreen;
