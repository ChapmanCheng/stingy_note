import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/StingyNotes";

const { Navigator, Screen } = createStackNavigator();

const MainStackNavigator = () => (
  <Navigator>
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default MainStackNavigator;
