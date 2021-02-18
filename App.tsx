import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigator from "./navigators/DrawerNavigator";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
