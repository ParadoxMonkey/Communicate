import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import Constants from "expo-constants";
import { AppForm, AppFormField } from "../../components/forms";
import * as Yup from "yup";
import FileTicketFormField from "../../components/forms/FileTicketFormField";

const validationSchema = Yup.object().shape({
  email: Yup.number().required().label("Phone Number"),
  password: Yup.string().required().min(4).label("Password"),
});

function FileTicketScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>File a New Ticket</Text>
      <AppForm
        initialValues={{ natureOfProblem: "", helpExpected: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FileTicketFormField
          fieldText="Please describe your problem"
          placeholder="What is the nature of your problem?"
          color={colors.black}
          placeholderColor={colors.medium}
          autoCapitalize="words"
          keyboardType="email-address"
          name="natureOfProblem"
        />

        <FileTicketFormField
          fieldText="Please tell us what kind of help you expect from the authorities"
          placeholder="What kind of help do you need?"
          color={colors.black}
          placeholderColor={colors.medium}
          autoCapitalize="words"
          keyboardType="email-address"
          name="natureOfProblem"
        />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F7D6D0",
    padding: 15,
  },

  headingText: {
    fontSize: 44,
    color: colors.maroon,
    alignSelf: "center",
  },
});
export default FileTicketScreen;
