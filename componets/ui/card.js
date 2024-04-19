import React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../../screen/constants/color";

const CardContainer = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default CardContainer;
const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    backgroundColor: Color.primary800,
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
