import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color } from "../../screen/constants/color";

const InstructionText = ({ children }) => {
  return (
    <View>
      <Text style={styles.instructionText}>{children}</Text>
    </View>
  );
};
export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Color.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
