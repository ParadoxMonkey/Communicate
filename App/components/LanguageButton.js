import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function LanguageButton({ title, onPress }) {
  const { i18n } = useTranslation();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: 80,
  },

  text: {
    color: colors.white,
    fontSize: i18n.language === "hi" ? 18 : 14,
    textTransform: "capitalize",
  },
});

export default LanguageButton;
