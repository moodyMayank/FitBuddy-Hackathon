import React from "react";
import { ScrollView, Box } from "native-base";
// import { HStack,Icon,Text,Box,MaterialCommunityIcons,MaterialIcons } from "native-base";
import Card from "./Card";
import dummyCentres from "../assets/Dummy_Data/Dummy_Centres";
import SearchBar from "./SearchBar";
import { Pressable } from "react-native";

const MainApp = ({ navigation }) => {
  return (
    <>
      <SearchBar />
      <ScrollView>
        <Box
          display="flex"
          flexDirection="column"
          justify="space-between"
          m="2"
        >
          {dummyCentres.map((Option) => (
            <Pressable onPress={() => navigation.navigate("DynamicScreen")}>
              <Card
                image={Option.image}
                name={Option.name}
                price={Option.price}
                area={Option.area}
              />
            </Pressable>
          ))}
        </Box>
      </ScrollView>
    </>
  );
};

export default MainApp;
