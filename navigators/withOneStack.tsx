import React from "react";
import { Route } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const { Navigator, Screen } = createStackNavigator();

export default function withOneStack(WrappedComponent: React.FC) {
  return () => (
    <Navigator screenOptions={screenOptions}>
      <Screen name={WrappedComponent.name} component={WrappedComponent} />
    </Navigator>
  );
}

interface screenOptionsProps {
  route: Route<string, object | undefined>;
  navigation: any;
}

const styles = StyleSheet.create({
  header: {},
});

const screenOptions = ({
  navigation,
  route,
}: screenOptionsProps): StackNavigationOptions => ({
  headerLeft: () => (
    <Ionicons
      name="menu"
      onPress={() => navigation.openDrawer()}
      size={30}
      style={{ marginLeft: 16 }}
    />
  ),
});
