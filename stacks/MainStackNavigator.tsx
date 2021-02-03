import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import { StackNavigationOptions } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const MainStackNavigator = () => (
  <Navigator screenOptions={options}>
    <Screen name="Home" component={Home} />
    <Screen name="About" component={About} />
  </Navigator>
);

const options: StackNavigationOptions = {
  headerTitleAlign: "center",
};

export default MainStackNavigator;
