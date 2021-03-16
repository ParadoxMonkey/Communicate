import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function AppTextInput({ icon, placeholderColor, color, ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        color={color}
        placeholderTextColor={placeholderColor}
        maxLength={28}
        {...otherProps}
      />
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={colors.medium}
          style={styles.icon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    height: 50,
    width: "80%",
    flexDirection: "row",
    padding: 1,
    marginVertical: 10,
    justifyContent: "space-between",
  },

  icon: {
    alignSelf: "center",
  },

  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
export default AppTextInput;
