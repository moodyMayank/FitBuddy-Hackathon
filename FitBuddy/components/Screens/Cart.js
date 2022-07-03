import React from "react";
import { Text } from "react-native";

export default function CartScreen({ navigation, route }) {
  return <Text>{route.params.name}</Text>;
}
