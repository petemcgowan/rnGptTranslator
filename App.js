import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CompletionsForm } from "./components/CompletionsForm";
import { EnglishToGermanForm } from "./components/EnglishToGermanForm";
import { TestForm } from "./components/TestForm";
// import { OPENAI_API_KEY } from "@env";

export default function App() {
  const OpenAI = require("openai-api");

  console.log("process.env.OPENAI_API_KEY:" + process.env.OPENAI_API_KEY);

  const openai = new OpenAI(process.env.OPENAI_API_KEY);

  return (
    <View style={styles.container}>
      {/* Completion API call */}
      {/* <CompletionsForm openai={openai} /> */}
      <TestForm />
      <EnglishToGermanForm openai={openai} />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    color: "#fff",
    alignItems: "center",
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
