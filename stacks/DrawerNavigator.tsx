import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackNavigator from "./MainStackNavigator";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerNavigator = () => (
  <Navigator>
    <Screen name="Home" component={MainStackNavigator} />

    <Screen name="About">
      {({ route }) => <MainStackNavigator initialRoute={route.name} />}
    </Screen>
  </Navigator>
);

export default DrawerNavigator;
