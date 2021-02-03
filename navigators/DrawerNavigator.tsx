import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import About from "../screens/About";
import withOneStack from "./withOneStack";

const { Navigator, Screen } = createDrawerNavigator();

const HomeWithOneStack = withOneStack(Home);
const AboutWithOneStack = withOneStack(About);

const DrawerNavigator = () => (
  <Navigator>
    <Screen name="Home" component={HomeWithOneStack} />
    <Screen name="About" component={AboutWithOneStack} />
  </Navigator>
);

export default DrawerNavigator;
