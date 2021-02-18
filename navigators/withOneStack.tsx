import React from "react";
import { Route } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { Navigator, Screen } = createStackNavigator();

export default function withOneStack(WrappedComponent: React.FC) {
  return () => (
    <Navigator screenOptions={screenOptions} headerMode={"screen"}>
      <Screen name={"愛情小氣簿"} component={WrappedComponent} />
    </Navigator>
  );
}

interface screenOptionsProps {
  route: Route<string, object | undefined>;
  navigation: any;
}

const styles = StyleSheet.create({
  header: {
    minHeight: 42,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  headerText: {
    fontSize: 24,
    color: "#fff",
  },
  headerMenu: {
    color: "#fff",
  },
});

const screenOptions = ({
  navigation,
  route,
}: screenOptionsProps): StackNavigationOptions => ({
  header: ({}) => (
      <LinearGradient
        colors={["rgba(243, 229, 191, 0.47)", "rgba(243, 137, 130, 1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.headerText}>愛情小氣簿</Text>

    <Ionicons
      name="menu"
      onPress={() => navigation.openDrawer()}
          size={35}
          style={styles.headerMenu}
    />
      </LinearGradient>
  ),

  // headerLeft: () => (
  //   <Ionicons
  //     name="menu"
  //     onPress={() => navigation.openDrawer()}
  //     size={30}
  //     style={{ marginLeft: 16 }}
  //   />
  // ),
});

// colors={["rgba(41, 186, 218, 0.91)", "rgba(237, 66, 148, 0.83)"]}
// start={{x: 0, y: 0}}
// end={{x: 1, y: 1}}
