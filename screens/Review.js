// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Review = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the Review screen</Text>
      <Button title="Review Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Review;
