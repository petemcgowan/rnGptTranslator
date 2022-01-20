import React, { useState, useEffect } from "react";

import {
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

/*
Given a prompt, the model will return one or more predicted completions.  I'm using this one for English to German conversion

https://beta.openai.com/docs/api-reference/completions
*/

const flatUiStyles = StyleSheet.create({
  // translateButton: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderWidth: 1,
  //   borderColor: "#007BFF",
  //   backgroundColor: "#007BFF",
  //   color: "#BBBBBB",
  //   padding: 15,
  //   margin: 5,
  // },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    // 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    // sans-serif;
    // -webkit-font-smoothing: antialiased;
    height: 230,
    // boxSizing: "borderBox",
    marginBottom: 25,
    backgroundColor: "#394264",
    borderRadius: 5,
  },
  titular: {
    // flex: 1,
    // justifyContent: "center",
    // boxSizing: "borderBox",
    // fontSize: 27,
    // color: "#fff",
    // lineHeight: 60,
    // margin: 0, // same as setting marginTop, marginLeft, marginBottom, and marginRight
    // textAlign: "center",
    // borderTopLeftRadius: 5,
    // borderTopRightRadius: 5,
    // backgroundColor: "#35aadc",

    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#1f253d",
    color: "#fff",
    margin: 0,
  },
  subBtnContainer: {
    textAlign: "center",
    alignItems: "center",
  },
  email: {},
  textInput: {
    // -webkit-font-smoothing: antialiased;
    color: "#fff",
    flex: 1,
    justifyContent: "center",
    boxSizing: "borderBox",
    width: 360,
    height: 50,
    marginLeft: 20,
    marginBottom: 20,
    paddingLeft: 45,
    backgroundColor: "#50597b",
    // border: solid 1 "#1f253d",  // border-width, border-style, border-color
    borderWidth: "solid", // border-width, border-style, border-color
    borderStyle: 1, // border-width, border-style, border-color
    borderColor: "#1f253d", // border-width, border-style, border-color
    borderRadius: 5,
  },
  translateButton: {
    // -webkit-font-smoothing: antialiased;
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#11a8ab",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    boxSizing: "borderBox",
    display: "block",
    width: 175,
    lineHeight: 50,
    fontSize: 16,
    fontWeight: 700,
    margin: 0, // 0 auto
    borderRadius: 5,
    // transition: background .3s,  TODO
  },
  button: {
    flex: 1,
    justifyContent: "center",
    color: "#fff",
  },
  tweetsBlock: {
    // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    // 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    // sans-serif;
    // -webkit-font-smoothing: antialiased;
    color: "#fff",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    boxSizing: "borderBox",
    marginBottom: 25,
    backgroundColor: "#394264",
    color: "#fff",
    borderRadius: 5,
    height: 375,
  },
  tweet: {
    // fontFamily: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    // 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    // sans-serif;
    color: "#fff",
    fontFamily: "-apple-system, BlinkMacSystemFont",
    // -webkit-font-smoothing: antialiased;
    textAlign: "center",
    boxSizing: "borderBox",
    color: "#fff",
  },

  scrollViewContainer: {
    color: "#fff",
    flex: 1,
    justifyContent: "center",
  },

  icon: {},
  entypoLanguage: {},
});

export function EnglishToGermanForm(props) {
  const [translatePhrase, setTranslatePhrase] = useState("");
  const [translatePhraseResult, setTranslatePhraseResult] =
    useState("Awaiting result...");

  const handleTranslatePhrase = (event) => {
    setTranslatePhrase(event.target.value);
  };

  useEffect(() => {
    setTranslatePhrase(`I do not speak German.`);
    setTranslatePhraseResult("Awaiting result...");
    console.log("useEffect called");
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    (async () => {
      console.log("completion:" + translatePhrase);
      console.log(
        "completion NEW:" +
          `English: See you later!\nGerman: Bis später!\n\nEnglish: Where is a good restaurant?\nGerman: Wo gibt es ein gutes Restaurant?\n\nEnglish: What rooms do you have available?\nGerman:Wie viele Zimmer haben Sie frei?\n\nEnglish:${translatePhrase}.\nGerman:`
      );
      const gptResponse = await props.openai.complete({
        engine: "davinci",
        prompt: `English: See you later!\nGerman: Bis später!\n\nEnglish: Where is a good restaurant?\nGerman: Wo gibt es ein gutes Restaurant?\n\nEnglish: What rooms do you have available?\nGerman:Wie viele Zimmer haben Sie frei?\n\nEnglish:${translatePhrase}.\nGerman:`,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
      });
      setTranslatePhraseResult(
        JSON.stringify(gptResponse.data.choices[0].text)
      );
      console.log("gptResponse.data:" + JSON.stringify(gptResponse.data));
    })();
  };

  return (
    <View styles={flatUiStyles.scrollViewContainer}>
      {/* INPUT SECTION */}
      {/* join-newsletter block */}
      <View styles={flatUiStyles.inputContainer}>
        {/* className="titular" / figure out h2 */}
        <Text styles={flatUiStyles.titular}>English to German</Text>
        {/* View inputContainer */}
        <View styles={flatUiStyles.inputContainer}>
          {/* TextInput className="email text-input"
        just combine these style attributes into one (text-input)
      */}
          <TextInput
            style={flatUiStyles.textInput}
            value={translatePhrase}
            placeholder="<translation phrase>"
            maxLength={30}
            onChangeText={(text) => setTranslatePhrase(text)}
            onBlur={Keyboard.dismiss}
          ></TextInput>
        </View>
        {/* Button translate button*/}
        <TouchableOpacity
          style={flatUiStyles.subBtnContainer}
          onPress={handleSubmit}
        >
          <Text style={flatUiStyles.translateButton}>TRANSLATE</Text>
        </TouchableOpacity>
      </View>

      {/* RESULT SECTION */}

      {/* div tweets block */}
      <View style={flatUiStyles.tweetsBlock}>
        {/* h2 titular */}
        <Text style={flatUiStyles.titular}>Translation Results</Text>
        {/* div tweet*/}
        <View styles={flatUiStyles.tweet}>
          {/* p - note, just make this larger (width, height)*/}
          <Text styles={flatUiStyles.tweet}>{translatePhraseResult}</Text>
        </View>
      </View>
    </View>
  );
}
