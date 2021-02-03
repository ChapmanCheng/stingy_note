import React, { FunctionComponent } from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import Home from "../screens/Home";
import About from "../screens/About";
import { StackNavigationOptions } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

interface props {
  initialRoute?: string;
}

const MainStackNavigator: FunctionComponent<props> = ({ initialRoute }) => (
  <Navigator screenOptions={options} initialRouteName={initialRoute}>
    <Screen name="Home" component={Home} />
    <Screen name="About" component={About} />
  </Navigator>
);

const options: StackNavigationOptions = {
  headerTitleAlign: "center",
};

MainStackNavigator.defaultProps = { initialRoute: "Home" };

export default MainStackNavigator;
