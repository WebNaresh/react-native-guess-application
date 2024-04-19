import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../componets/ui/primaryButton";
import Title from "../componets/ui/titleComponent";
import { Color } from "./constants/color";

const GameOverScreen = ({ restartGame, rounds, userNumber }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        {" "}
        Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds
        to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={restartGame}> Start Game</PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  imageContainer: {
    width: width - 150,
    height: width - 150,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Color.primary800,
    overflow: "hidden",
    margin: 36,
    borderStyle: "dashed",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    textAlign: "center",
  },
  highlight: {
    color: Color.primary500,
    fontFamily: "open-sans-bold",
  },
  buttonContainer: {
    width: "100%",
    padding: 16,
    height: 90,
  },
});
