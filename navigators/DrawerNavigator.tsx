import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StingyNotes from "../screens/StingyNotes";
import Home from "../screens/Home";
import About from "../screens/About";
import withOneStack from "./withOneStack";

const { Navigator, Screen } = createDrawerNavigator();

const StingyNotesWithOneStack = withOneStack(StingyNotes);


const DrawerNavigator = () => (
  <Navigator>
    <Screen name="小氣簿" component={StingyNotesWithOneStack} />
    
  </Navigator>
);

export default DrawerNavigator;
