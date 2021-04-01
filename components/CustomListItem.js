import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Image, Input } from "react-native-elements";
import Card from "./Card";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, backgroundColor, { padding: 10 }]}
  >
    <Card style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.url,
        }}
      />
    </Card>
    <View style={styles.titleContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            color: "#b1adad",
          }}
        >
          FRESHO
        </Text>
        <Text
          style={{
            color: "#b1adad",
          }}
        >
          7 hrs
        </Text>
      </View>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <View style={{ fontSize: 12, backgroundColor: "#ebe6e5", width: "100%" }}>
        <Text style={{ color: "#b1adad" }}>{item.qty}</Text>
      </View>
      <View style={{ padding: 5, flexDirection: "row" }}>
        <Text style={{ paddingRight: 10 }}>Rs.{item.Amount}</Text>
        <Text
          style={{
            textDecorationLine: "underline line-through",
            color: "#b1adad",
          }}
        >
          175
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const CustomListItem = ({ DATA }) => {
  console.log("Data", DATA);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#fff";

    // const color = item.id === selectedId ? "black" : "black";

    return (
      <Item
        style={styles.item}
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 8,
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
  },
  titleContainer: {
    marginLeft: 20,
  },

  image: {
    width: 100,
    height: 100,
  },
});
