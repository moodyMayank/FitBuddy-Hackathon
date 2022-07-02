import React from "react";
import { VStack, Divider, Box, Heading, Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {
  const Icon1 = () => {
    return (
      <Icon
        m="2"
        ml="3"
        size="6"
        color="gray.400"
        as={MaterialIcons}
        name="search"
      />
    );
  };

  return (
    <VStack
      my="4"
      space={5}
      w="100%"
      maxW="300px"
      divider={<Box px="2">{/* <Divider /> */}</Box>}
    >
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Material</Heading>
        <Input
          placeholder="Search People & Places"
          width="100%"
          borderRadius="4"
          py="3"
          px="1"
          fontSize="14"
          InputLeftElement={
            <Icon
              m="2"
              ml="3"
              size="6"
              color="gray.400"
              as={MaterialIcons}
              name="search"
            />
          }
          // InputRightElement={Icon1}
        />
      </VStack>
    </VStack>
  );
};

export default SearchBar;
