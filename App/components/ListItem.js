import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function ListItem({ title, subTitle, image, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        console.log("clickedfromwithin");
      }}
    >
      <Image style={styles.image} source={image} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#117c96",
    flexDirection: "row",
    alignSelf: "center",
    width: "95%",
    alignItems: "center",
    margin: 10,
    marginHorizontal: 5,
    marginTop: 25,
    marginBottom: 20,
    borderRadius: 30,
    padding: 5,
    paddingHorizontal: 15,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  subTitle: {
    color: "white",
    maxWidth: 250,
    paddingTop: 5,
  },

  title: {
    color: colors.black,
    fontWeight: "700",
    fontFamily: "sans-serif-medium",
    fontSize: 20,
  },
});
export default ListItem;
