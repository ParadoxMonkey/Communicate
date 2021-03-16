import React from "react";
import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import { ScrollView } from "react-native-gesture-handler";

function HowtoUseScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>How to use this app</Text>
      <ScrollView>
        <View style={styles.bodyTextContainer}>
          <Text style={styles.bodyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            est nunc, sagittis ut velit eu,
          </Text>
          <Text Text style={styles.bodyText}>
            vestibulum volutpat neque. Aenean vel condimentum quam. Morbi quam
            nulla, ullamcorper in consequat a, sodales nec libero. Suspendisse
            porta, metus vitae feugiat pretium, mauris lacus eleifend risus, vel
            tempus mauris mauris et orci. Duis rutrum consectetur ante. Sed a
            odio pretium, maximus quam ac, blandit diam. Praesent in nulla
            turpis.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    padding: 25,
    fontSize: 18,
    lineHeight: 30,
    fontFamily: "Roboto",
  },

  bodyTextContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
  },

  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F7D6D0",
  },

  headingText: {
    fontSize: 42,
    color: colors.maroon,
    alignSelf: "center",
  },
});
export default HowtoUseScreen;
