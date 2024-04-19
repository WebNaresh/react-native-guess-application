import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.OS === "ios" ? 2 : 0,
    borderColor: "white",
    padding: 12,
    fontFamily: "open-sans-bold",
  },
});
