import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    if (email == "shiv7727@gmail.com" && password == 123) {
      console.log("email", email);
      console.log("password", password);
      navigation.replace("Home");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg",
        }}
        style={{ width: 200, height: 200, borderRadius: 10, marginBottom: 20 }}
      />
      <View style={styles.inputContainer}>
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
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button containerStyle={styles.button} title="Login" onPress={signIn} />
      <Button
        containerStyle={styles.button}
        type="outline"
        title="Register"
        onPress={() => navigation.navigate("Register")}
      />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
