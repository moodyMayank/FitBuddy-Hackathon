import React from "react";
import { ScrollView, Box } from "native-base";
// import { HStack,Icon,Text,Box,MaterialCommunityIcons,MaterialIcons } from "native-base";
import Card from "./Card";
import Cart from "./Cart";
import dummyCentres from "../assets/Dummy_Data/Dummy_Centres";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { Pressable, Button } from "react-native";

const MainApp = ({ navigation }) => {
  return (
    <>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Cart")}
      />
      <SearchBar />
      <ScrollView>
        <Box
          display="flex"
          flexDirection="column"
          justify="space-between"
          m="2"
        >
          {dummyCentres.map((Option) => (
            <Card
              image={Option.image}
              name={Option.name}
              price={Option.price}
              area={Option.area}
            />
          ))}
        </Box>
      </ScrollView>
      <Footer />
    </>
  );
};

export default MainApp;
