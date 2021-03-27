import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// screens
import Home from "../screens/Home";
import About from "../screens/About";
import Review from "../screens/Review";

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "My home",
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen
        name="Review"
        component={Review}
        options={{
          title: "Review Details ",
          headerStyle: {
            backgroundColor: "#eee",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
