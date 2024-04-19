import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color } from "../../screen/constants/color";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber + 1}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Color.accent500,
    borderWidth: 1,
    borderRadius: 12,
    margin: 4,
    padding: 8,
    paddingHorizontal: 26,
    paddingVertical: 12,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
  },
});
