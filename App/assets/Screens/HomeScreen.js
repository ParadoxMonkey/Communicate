import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Constants from "expo-constants";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import LanguageButton from "../../components/LanguageButton";

import ListItem from "../../components/ListItem";
import colors from "../../config/colors";

function HomeScreen(props) {
  const navigation = useNavigation();
  const { t, i18n } = useTranslation();

  const trans_yourAccount = t("YourAccount");
  const trans_yourAccountDesc = t("YourAccountDesc");

  const trans_fileTicket = t("FileTicket");
  const trans_fileTicketDesc = t("FileTicketDesc");

  const trans_howToUse = t("HowToUse");
  const trans_howToUseDesc = t("HowToUseDesc");

  const items = [
    {
      id: 1,
      title: t(trans_yourAccount),
      description: t(trans_yourAccountDesc),
      image: require("../ReactNativeTestBackground.jpg"),
      targetScreen: "HomeScreen",
    },
    {
      id: 2,
      title: t(trans_fileTicket),
      description: t(trans_fileTicketDesc),
      image: require("../favicon.png"),
      targetScreen: "File a New Ticket",
    },
    {
      id: 3,
      title: t(trans_howToUse),
      description: t(trans_howToUseDesc),
      image: require("../icon.png"),
      targetScreen: "How to Use this App",
    },
  ];

  return (
    <View style={styles.background}>
      <Text style={styles.headingText}>{t("Home")}</Text>

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
    alignSelf: "center",
    left: -30,
  },

  headingText: {
    fontSize: 44,
    fontWeight: "700",
    color: colors.orange,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 10,
  },

  hindChangeLabel: {
    color: colors.primary,
    fontSize: 18,
    marginTop: 5,
    alignSelf: "center",
    left: -30,
  },

  list: {},
});

export default HomeScreen;
