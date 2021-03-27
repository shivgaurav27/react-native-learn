import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <MaterialIcons
          name="delete"
          size={24}
          color="black"
          onPress={() => pressHandler(item.key)}
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: "dashed",
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 10,
  },
});
