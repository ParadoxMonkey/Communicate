import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

function Demo(props) {
  return (
    <View style={styles.container}>
      <AppButton title="Hello" style={styles.button} />
      <AppButton title="World" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    padding: 50,
    marginTop: 100,
    width: "100%",
    justifyContent: "space-around",
  },

  button: {
    height: "50%",
    marginLeft: 10,
  },
});

export default Demo;
