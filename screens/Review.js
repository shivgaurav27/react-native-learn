import React from "react";
import { Button, Text, View } from "react-native";

import { globalStyles } from "../styles/global";

export default function Review({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}> Review Screens</Text>
      <Button title="back to home screen" onPress={pressHandler} />
    </View>
  );
}
