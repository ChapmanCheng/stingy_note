import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import options from "./StackNavigationOptions";

const { Navigator, Screen } = createStackNavigator();

export default function withOneStack(WrappedComponent: React.FC) {
  return () => (
    <Navigator screenOptions={options}>
      <Screen name={WrappedComponent.name} component={WrappedComponent} />
    </Navigator>
  );
}