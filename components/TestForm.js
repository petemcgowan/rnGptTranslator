import React from "react";

import {
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

export function TestForm() {
  return (
    <View>
      <View>
        <Text style={testStyles.textBox}>English to German</Text>
        <TextInput
          style={testStyles.textBox}
          value="English:<input text here> German:"
          placeholder="English:<input text here> German:"
          maxLength={30}
          onChangeText={(text) => setTranslatePhrasePOC(text)}
          onBlur={Keyboard.dismiss}
        ></TextInput>
        {/* Button subscribe button*/}
        <TouchableOpacity style={testStyles.subBtnContainer}>
          <Text style={testStyles.subscribeButton}>TRANSLATE</Text>
        </TouchableOpacity>
      </View>
      <View></View>
      <View>
        <Text>Translation Results</Text>
        <View>
          <Text>"Awaiting result..."</Text>
        </View>
      </View>
    </View>
  );
}

const testStyles = StyleSheet.create({
  textBox: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#1f253d",
    color: "#fff",
    margin: 0,
  },
  textBoxContainer: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#1f253d",
    margin: 0,
  },
  subscribeButton: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#11a8ab",
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
  },
  subBtnContainer: {
    textAlign: "center",
    alignItems: "center",
  },
});
