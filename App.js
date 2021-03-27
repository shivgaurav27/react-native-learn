import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

// screens
import Home from "./screens/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}
