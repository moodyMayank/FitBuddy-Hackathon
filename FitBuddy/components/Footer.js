import React from "react";
import {
  NativeBaseProvider,
  Box,
  Center,
  HStack,
  Pressable,
  Icon,
  Text,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Footer = (navigation) => {
  const [selected, setSelected] = React.useState(1);
  return (
    <Box display="flex" flexDirection="column" justify="flex-end">
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable flex={1}>
          <Center>
            <Icon
              m="2"
              ml="3"
              size="6"
              color="white"
              as={MaterialIcons}
              name="home"
            />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable flex={1}>
          <Center>
            <Icon
              m="2"
              ml="3"
              size="6"
              color="white"
              as={MaterialIcons}
              name="search"
            />
            <Text color="white" fontSize="12">
              Bookings
            </Text>
          </Center>
        </Pressable>
        <Pressable flex={1}>
          <Center>
            <Icon
              m="2"
              ml="3"
              size="6"
              color="white"
              as={MaterialIcons}
              name="shopping-cart"
            />
            <Text color="white" fontSize="12">
              Cart
            </Text>
          </Center>
        </Pressable>
        <Pressable flex={1}>
          <Center>
            <Icon
              m="2"
              ml="3"
              size="6"
              color="white"
              as={AntDesign}
              name="profile"
            />
            <Text color="white" fontSize="12">
              Profile
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Footer;
