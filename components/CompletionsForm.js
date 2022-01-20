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
Given a prompt, the model will return one or more predicted completions.

Can also return the probabilities of alternative tokens at each position.


https://beta.openai.com/docs/api-reference/completions
*/

const styles = StyleSheet.create({
  saveButton: {
    borderWidth: 1,
    borderColor: "#007BFF",
    backgroundColor: "#007BFF",
    color: "#BBBBBB",
    padding: 15,
    margin: 5,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
  inputContainer: {
    paddingTop: 15,
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  // status: {
  //   padding: 10,
  //   textAlign: "center",
  // },
});

export function CompletionsForm(props) {
  // const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  // const CompletionsForm = (props) => {
  // export function CompletionsForm(props) {
  const [completion, setCompletion] = useState("");
  const [completionResult, setCompletionResult] =
    useState("Awaiting result...");

  // const handleCompletionResult = (event) => {
  //   setCompletionResult(event.target.value);
  // };

  const handleSubmit = (/*evt*/) => {
    // evt.preventDefault();
    // Keyboard.dismiss();
    (async () => {
      console.log("completion:" + completion);
      const gptResponse = await props.openai.complete({
        engine: "davinci",
        prompt: completion,
        maxTokens: 20,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 1,
        n: 1,
        stream: false,
        stop: ["\n", "testing"],
      });
      setCompletionResult(
        JSON.stringify(completion + gptResponse.data.choices[0].text)
      );
      console.log("gptResponse.data:" + JSON.stringify(gptResponse.data));
    })();
  };

  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
  //     setKeyboardStatus("Keyboard Shown");
  //   });
  //   const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
  //     setKeyboardStatus("Keyboard Hidden");
  //   });

  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);

  return (
    <ScrollView style={styles.inputContainer}>
      <Text>Start of Completion</Text>

      <TextInput
        style={styles.textInput}
        value={completion}
        placeholder="Completion Type Question:"
        maxLength={30}
        onChangeText={(text) => setCompletion(text)}
        onBlur={Keyboard.dismiss}
        // onSubmitEditing={Keyboard.dismiss}
        // onBlur={() => {
        //   console.log("blur called");
        //   Keyboard.dismiss();
        // }}
      ></TextInput>
      {/* <Text style={styles.status}>{keyboardStatus}</Text> */}
      {/* <input type="submit" value="Submit Completion" /> */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
        <Text style={styles.saveButtonText}>Submit Completion</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText} value={completionResult}>
          End of Completion
        </Text>
      </TouchableOpacity>
      <Text
        value={completionResult}
        style={styles.textInput}
        placeholder="Awaiting result...:"
      ></Text>
      <Text>End of Completion</Text>
    </ScrollView>
  );
}
///*
// export default CompletionsForm;
