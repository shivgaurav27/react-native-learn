import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "ABC",
    });
  }, [navigation]);

  const register = () => {};

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 40 }}>
        Create Account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          autoFocus
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Confirm Password"
          autoFocus
          type="confirmPassword"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        title="Register"
        onPress={register}
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
