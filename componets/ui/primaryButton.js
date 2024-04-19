import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Color } from "../../screen/constants/color";

const PrimaryButton = ({ children, onPress, style }) => {
  const pressHandler = () => {
    onPress();
  };
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: Color.primary600 }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : [styles.buttonInnerContainer]
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    flex: 1,
  },
  buttonInnerContainer: {
    backgroundColor: Color.primary500,
    paddingVertical: 16,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
