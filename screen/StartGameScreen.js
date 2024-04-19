import React, { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import CardContainer from "../componets/ui/card";
import InstructionText from "../componets/ui/instructionText";
import PrimaryButton from "../componets/ui/primaryButton";
import Title from "../componets/ui/titleComponent";
import { Color } from "./constants/color";

const StartGameScreen = ({ setUserNumber, userNumber }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const submitHandler = () => {
    console.log("Button Pressed");
    const choosenNumber = parseInt(enteredValue);
    console.log(
      `🚀 ~ file: StartGameScreen.js:13 ~ choosenNumber:`,
      choosenNumber
    );
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setEnteredValue(""),
        },
      ]);
      return;
    }
    setUserNumber(enteredValue);
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Start a New Game</Title>
      <CardContainer>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => {
            setEnteredValue(text);
          }}
          value={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <PrimaryButton
            style={styles.buttonExtraStyle}
            onPress={() => {
              setEnteredValue("");
            }}
          >
            Reset
          </PrimaryButton>
          <PrimaryButton
            style={styles.buttonExtraStyle}
            onPress={submitHandler}
          >
            Confirm
          </PrimaryButton>
        </View>
      </CardContainer>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 100,
    alignItems: "center",
    gap: 20,
    height: "100%",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Color.accent500,
    borderBottomWidth: 2,
    color: Color.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonExtraStyle: {
    flex: 1,
  },
});
