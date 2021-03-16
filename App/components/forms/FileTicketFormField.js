import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import colors from "../../config/colors";
import { Text } from "react-native";
import TicketTextInput from "./TicketTextInput";
import { TextInput } from "react-native-gesture-handler";

function FileTicketFormField({ name, fieldText, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <Text style={styles.fieldText}>{fieldText}</Text>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        multiline={true}
        maxLength={2000}
        style={styles.input}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  fieldText: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: -25,
    fontSize: 16,
    fontFamily: "Roboto",
    paddingVertical: 1,
    color: "#695007",
  },

  input: {
    marginTop: 30,
    marginBottom: 100,
    height: 50,
    width: "100%",
    borderColor: "black",
    backgroundColor: "#d1d0cd",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
  },
});

export default FileTicketFormField;
