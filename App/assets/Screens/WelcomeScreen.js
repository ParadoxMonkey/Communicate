import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  backgroundColor,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

import { AppForm, AppFormField, SubmitButton } from "../../components/forms";
import { useTranslation } from "react-i18next";
import LanguageButton from "../../components/LanguageButton";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  email: Yup.number().required().label("Phone Number"),
  password: Yup.string().required().min(4).label("Password"),
});

function WelcomeScreen() {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../moon-background.jpg")}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.titleWhite}>
          {t("Commu")}
          <Text style={styles.titleOrange}>{t("nicate")}</Text>
        </Text>
      </View>

      <View style={styles.changeLanguageButtonContainer}>
        <Text style={styles.engChangeLabel}>Change Language</Text>
        <LanguageButton
          onPress={() =>
            i18n.changeLanguage(i18n.language === "hi" ? "en" : "hi")
          }
          title={i18n.language === "en" ? "Change" : "बदलें"}
        />
        <Text style={styles.hindChangeLabel}>भाषा बदलें</Text>
      </View>

      <View style={styles.connectIconContainer}>
        <FontAwesome
          style={styles.connectIcon}
          name="connectdevelop"
          size={180}
          color={colors.orange}
        />
      </View>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.textInputContainer}>
          <View style={styles.usernameInput}>
            <AppFormField
              placeholder="Phone Number"
              color={colors.white}
              placeholderColor={colors.medium}
              icon="account"
              autoCapitalize="none"
              keyboardType="number-pad"
              name="email"
            />
          </View>

          <View style={styles.passwordInput}>
            <AppFormField
              placeholder="Password"
              color={colors.white}
              placeholderColor={colors.medium}
              icon="form-textbox-password"
              secureTextEntry={true}
              name="password"
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("HomeScreen")}
          />
          <AppButton
            title="Sign Up"
            onPress={() => navigation.navigate("SignUp")}
          />
        </View>
      </AppForm>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 20,
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
  },

  changeLanguageButtonContainer: {
    justifyContent: "center",
    width: 150,
    position: "absolute",
    right: -10,
    top: 115,
  },

  connectIcon: {
    position: "absolute",
    bottom: 375,
    left: 90,
    marginTop: 100,
  },

  connectIconContainer: {
    flex: 1,
    alignItems: "center",
  },

  engChangeLabel: {
    color: colors.primary,
    fontSize: 12,
    marginBottom: 7,
    alignSelf: "center",
    left: -30,
  },

  hindChangeLabel: {
    color: colors.primary,
    fontSize: 18,
    marginTop: 5,
    alignSelf: "center",
    left: -30,
  },

  loginButton: {
    width: "100%",
    height: 200,
    backgroundColor: "black",
  },

  passwordInput: {
    width: "100%",
  },

  textInputContainer: {
    flex: 1,
    marginLeft: 50,
    position: "absolute",
    bottom: 100,
    height: "20%",
    width: "100%",
    alignItems: "center",
    marginBottom: 5,
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },

  titleWhite: {
    color: colors.white,
    fontSize: 52,
    fontFamily: "sans-serif-medium",
    fontWeight: "bold",
  },

  titleOrange: {
    color: colors.orange,
  },

  usernameInput: {
    width: "100%",
  },
});

export default WelcomeScreen;
