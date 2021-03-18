import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "./i18n";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      //WelcomeScreen
      Commu: "Commu",
      nicate: "Nicate",
      Phone_Number: "Phone Number",
      Password: "Password",
      Login: "Login",
      SignUp: "SignUp",

      //HomeScreen
      Home: "Home",
      YourAccount: "Your Account",
      YourAccountDesc: "Access and edit your information",
      FileTicket: "File a New Ticket",
      FileTicketDesc: "Tell us about a problem that you need help with",
      HowToUse: "How to use this app",
      HowToUseDesc: "Learn about the functionalities this app offers",

      //FileTicketScreen
      FileTicketTitle: "File a New Ticket",
      DescribeYourProblemHeading: "Please describe your problem",
      DescribeYourProblemField: "What is the nature of your problem?",
      HelpRequiredHeading:
        "Please tell us what kind of help you expect from the authorities",
      HelpRequiredField: "What kind of help do you need?",
    },
  },
  hi: {
    translation: {
      //WelcomeScreen
      Commu: "कम्यु",
      nicate: "निकेट",
      Phone_Number: "फ़ोन नंबर",
      Password: "पासवर्ड",
      Login: "लोग इन",
      SignUp: "साइन अप",

      //HomeScreen
      Home: "होम",
      YourAccount: "आपका खाता",
      YourAccountDesc: "आपकी व्यक्तिगत जानकारी",
      FileTicket: "शिकायत दर्ज करवाए",
      FileTicketDesc: "आपकी समस्या हमें समझाए",
      HowToUse: "इस ऍप का उपयोग कैसे करते है ",
      HowToUseDesc:
        "इस ऍप  को अपने लाभ के लिए कैसे उपयोग किया जा सकता है सीखिए",

      //FileTicketScreen
      FileTicketTitle: "शिकायत दर्ज करवाए",
      DescribeYourProblemHeading: "आपकी समस्या का वर्णन करें",
      DescribeYourProblemField: "आपकी समस्या का वर्णन करें",
      HelpRequiredHeading: "आप किस प्रकार की सहायता प्राप्त करना चाहते है",
      HelpRequiredField: "आप किस प्रकार की सहायता प्राप्त करना चाहते है",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
