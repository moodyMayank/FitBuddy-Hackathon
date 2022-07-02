import React from "react";
import { Text, View } from "react-native";
import {
  Pressable,
  ScrollView,
  Center,
  NativeBaseProvider,
  Box,
} from "native-base";
// import { HStack,Icon,Text,Box,MaterialCommunityIcons,MaterialIcons } from "native-base";
import Card from "./Card";
import dummyCentres from "../assets/Dummy_Data/Dummy_Centres";
import SearchBar from "./SearchBar";

const MainApp = () => {
  return (
    <View>
      <SearchBar />
      <Text>Inside of MainApp</Text>
    </View>
  );
};

export default MainApp;
{
  /* <Center
    _dark={{ bg: "blueGray.900" }}
    _light={{ bg: "blueGray.50" }}
    px={4}
    flex={1}
  >     */
}

//   <Box>
//   <Center flex={1} px="2">
//     {/* <SearchBar /> */}
//     <ScrollView>
//       <Text>asdf</Text>
// {/*
//       {dummyCentres.map((Option) => (
//         <Card
//           image={Option.image}
//           name={Option.name}
//           price={Option.price}
//           area={Option.area}
//         />
//       ))} */}
//       {/* </Center> */}
//     </ScrollView>
//   </Center>
// </Box>
