import React from "react";
import { VStack, Divider, Box, Heading, Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = () => {
  function callMe() {
    console.warn("Clicked on Input ");
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      align="flex-start"
      marginTop={10}
    >
      <Input
        placeholder="Search People & Places"
        width="100%"
        borderRadius="4"
        py="3"
        px="1"
        fontSize="14"
        onChangeText={callMe}
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
      />
    </Box>
  );
};

export default SearchBar;
