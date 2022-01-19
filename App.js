import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CompletionsForm } from "./components/CompletionsForm";
import { EnglishToGermanForm } from "./components/EnglishToGermanForm";
// import { OPENAI_API_KEY } from "react-native-dotenv";
// import { OPENAI_API_KEY } from "@env";
// import { OPENAI_API_KEY } from "react-native-dotenv";

export default function App() {
  const OpenAI = require("openai-api");

  // console.log("OPENAI_API_KEY:" + OPENAI_API_KEY);
  console.log("process.env.OPENAI_API_KEY:" + process.env.OPENAI_API_KEY);

  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  // const openai = new OpenAI(
  //   "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"
  // );

  return (
    <View style={styles.container}>
      {/* Completion API call */}
      {/* <CompletionsForm openai={openai} /> */}
      <EnglishToGermanForm openai={openai} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "#1f253d",
    margin: 0,
    // fontFamily: "Roboto",
    fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, Roboto",
    webkitFontSmoothing: "antialiased",
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
