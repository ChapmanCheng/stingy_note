import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import options from "./StackNavigationOptions";

const { Navigator, Screen } = createStackNavigator();

const MainStackNavigator = () => (
  <Navigator screenOptions={options}>
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default MainStackNavigator;
