import { React } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "./Screens/Cart";
import ProfileScreen from "./Screens/ProfileScreen";
import MainApp from "./MainApp";

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Explore" component={MainApp} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
