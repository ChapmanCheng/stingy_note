import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import { StackNavigationOptions } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

interface props {
  initialRouteName?: string;
}

const MainStackNavigator = ({ initialRouteName }: props) => (
  <Navigator screenOptions={options} initialRouteName={initialRouteName}>
    <Screen name="Home" component={Home} />
    <Screen name="About" component={About} />
  </Navigator>
);

const options: StackNavigationOptions = {
  headerTitleAlign: "center",
};

MainStackNavigator.defaultProps = { initialRouteName: "Home" };

export default MainStackNavigator;
