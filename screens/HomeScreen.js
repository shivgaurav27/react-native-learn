import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    title: "Orange",
    Amount: 80,
    url:
      "https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  },
  // {
  //   id: "2",
  //   title: "Orange",
  //   Amount: 80,
  //   url:
  //     "https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  // },
  // {
  //   id: "3",
  //   title: "Orange",
  //   Amount: 80,
  //   url:
  //     "https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  // },
  // {
  //   id: "4",
  //   title: "Orange",
  //   Amount: 80,
  //   url:
  //     "https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  // },
  // {
  //   id: "5",
  //   title: "Orange",
  //   Amount: 80,
  //   url:
  //     "https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  // },
  // {
  //   id: "6",
  //   title: "Orange",
  //   Amount: 80,
  //   url:
  //     "https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  // },
  // {
  //   id: "7",
  //   title: "Orange",
  //   Amount: 80,
  //   url:
  //     "https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  // },
  // {
  //   id: "8",
  //   title: "Orange",
  //   Amount: 80,
  //   url:
  //     "https://images.unsplash.com/photo-1616679268603-0c13102c9b8d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2OTMyOTk1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
  // },
];

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Fresh Fruits",
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: 80,
            marginRight: 10,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  return <CustomListItem DATA={DATA} />;
};

export default HomeScreen;

const styles = StyleSheet.create({});
