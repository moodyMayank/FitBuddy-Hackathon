import React, { useState } from "react";
import {
  Text,
  Icon,
  Box,
  IconButton,
  Button,
  AspectRatio,
  Image,
  Heading,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "native-base";
import Card from "../Card";

export default function DynamicScreen({ navigation, route }) {
  const [hours, setHours] = useState(1);
  return (
    <Box
      display="flex"
      flexDirection="column"
      bg="white"
      width="100%"
      alignSelf="center"
    >
      <ScrollView>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: route.params.image,
            }}
            alt="image"
          />
        </AspectRatio>
        <Heading>{route.params.name}</Heading>
        <Text>{route.params.description}</Text>
        <Heading>Price : {route.params.price}/hr</Heading>
        <Box display="flex" flexDirection="row" justifyItems="center">
          <IconButton
            icon={<Icon as={AntDesign} name="minuscircleo" />}
            onPress={() => setHours(hours - 1)}
            borderRadius="full"
            _icon={{
              color: "orange.500",
              size: "md",
            }}
          />
          <Text>{hours}</Text>
          <IconButton
            icon={<Icon as={AntDesign} name="pluscircleo" />}
            onPress={() => setHours(hours + 1)}
            borderRadius="full"
            _icon={{
              color: "orange.500",
              size: "md",
            }}
          />
        </Box>
        <Button
          onPress={() => {
            navigation.navigate("Cart", route.params);
          }}
        >
          Book
        </Button>
      </ScrollView>
    </Box>
  );
}
