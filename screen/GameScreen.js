import { AntDesign } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import GuessLogItem from "../componets/game/guessLogItem";
import NumberContainer from "../componets/game/numberContainer";
import CardContainer from "../componets/ui/card";
import InstructionText from "../componets/ui/instructionText";
import PrimaryButton from "../componets/ui/primaryButton";
import Title from "../componets/ui/titleComponent";
let previousNumbers = new Set();
let min = 1;
let max = 100;
function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (previousNumbers.size === max - min + 1) {
    throw new Error("All numbers have been generated");
  }

  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude || previousNumbers.has(rndNum)) {
    return generateRandomBetween(min, max, exclude); // recursively regenerate number
  } else {
    previousNumbers.add(rndNum);
    return rndNum;
  }
}

console.log(`🚀 ~ file: GameScreen.js:14 ~ max:`, max);
const GameScreen = ({ userNumber, gameOverHandler, setRounds }) => {
  const initialGuess = generateRandomBetween(min, max, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessedNumber, setGuessedNumber] = useState([]);
  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === Number(userNumber)) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  function nextGuessHandler(direction) {
    let newRndN;

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      // console.log("Wrong Hint");
      Alert.alert("Don't Lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess;
    }

    newRndN = generateRandomBetween(min, max, currentGuess);
    setCurrentGuess(newRndN);
    setGuessedNumber((prev) => [newRndN, ...prev]);
    setRounds((prev) => prev + 1);
  }

  return (
    <View style={styles.container}>
      <Title>Opponent Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <CardContainer>
        <InstructionText>Higher or Lower ?</InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            <AntDesign name="plus" size={24} color="white" />{" "}
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <AntDesign name="minus" size={24} color="white" />
          </PrimaryButton>
        </View>
      </CardContainer>
      <View style={styles.listContainer}>
        <FlatList
          style={{
            marginVertical: 20,
          }}
          data={guessedNumber}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <GuessLogItem roundNumber={index} guess={item} />
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 48,
    height: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
