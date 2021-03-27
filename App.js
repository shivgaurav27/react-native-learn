import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee 1", key: "1" },
    { text: "buy coffee 2", key: "2" },
    { text: "buy coffee 3", key: "3" },
    { text: "buy coffee 4", key: "4" },
  ]);

  const pressHandler = (key) => {
    console.log("key:", key);
    setTodos((prevTodos) => {
      return prevTodos.filter((todos) => todos.key !== key);
    });
  };
  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text, key: Math.random().toString() }];
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header  */}
        <Header />
        <View style={styles.content}>
          {/* todo form  */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
