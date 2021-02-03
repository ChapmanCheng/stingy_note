import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackNavigator from "./MainStackNavigator";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = () => (
  <Navigator>
    <Screen name="Home" component={MainStackNavigator} />
    <Screen name="About" component={MainStackNavigator} />
  </Navigator>
);

export default DrawerNavigator;
