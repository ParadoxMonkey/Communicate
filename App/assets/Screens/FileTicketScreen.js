import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Screen from "../../components/Screen";
import colors from "../../config/colors";
import Constants from "expo-constants";
import { AppForm, AppFormField } from "../../components/forms";
import * as Yup from "yup";
import FileTicketFormField from "../../components/forms/FileTicketFormField";

import { useTranslation } from "react-i18next";
import LanguageButton from "../../components/LanguageButton";

const validationSchema = Yup.object().shape({
  email: Yup.number().required().label("Phone Number"),
  password: Yup.string().required().min(4).label("Password"),
});

function FileTicketScreen(props) {
  const { t, i18n } = useTranslation();

  const trans_fileTicketTitle = t("FileTicket");
  const trans_describeYourProblemHeading = t("DescribeYourProblemHeading");
  const trans_describeYourProblemField = t("DescribeYourProblemField");
  const trans_helpRequiredHeading = t("HelpRequiredHeading");
  const trans_helpRequiredField = t("HelpRequiredField");

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{trans_fileTicketTitle}</Text>

      <View style={styles.changeLanguageButtonContainer}>
        <Text style={styles.engChangeLabel}>Change Language</Text>
        <LanguageButton
          onPress={() =>
            i18n.changeLanguage(i18n.language === "hi" ? "en" : "hi")
          }
          title={i18n.language === "hi" ? "Change" : "बदलें"}
        />
        <Text style={styles.hindChangeLabel}>भाषा बदलें</Text>
      </View>

      <AppForm
        initialValues={{ natureOfProblem: "", helpExpected: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FileTicketFormField
          fieldText={trans_describeYourProblemHeading}
          placeholder={trans_describeYourProblemField}
          color={colors.black}
          placeholderColor={colors.fileTicketPlaceHolder}
          autoCapitalize="words"
          keyboardType="email-address"
          name="natureOfProblem"
        />

        <FileTicketFormField
          fieldText={trans_helpRequiredHeading}
          placeholder={trans_describeYourProblemField}
          color={colors.black}
          placeholderColor={colors.fileTicketPlaceHolder}
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
    backgroundColor: "#FFEEDD",
    padding: 15,
  },

  changeLanguageButtonContainer: {
    justifyContent: "center",
    width: 150,
    position: "relative",
    left: 250,
    top: 5,
  },

  engChangeLabel: {
    color: colors.primary,
    fontSize: 12,
    marginBottom: 7,
    alignSelf: "auto",
    left: -5,
  },

  headingText: {
    fontSize: 44,
    color: colors.maroon,
    alignSelf: "center",
  },

  hindChangeLabel: {
    color: colors.primary,
    fontSize: 18,
    marginTop: 5,
    alignSelf: "auto",
    left: 5,
  },
});
export default FileTicketScreen;
