import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleSVG from "../svg-jsx/title-svg";

const { Navigator, Screen } = createStackNavigator();

export default function withOneStack(WrappedComponent: React.FC) {
  return () => (
    <Navigator
      screenOptions={({ navigation, route }) => ({
        header: ({}) => (
          <SafeAreaView>
            <LinearGradient
              colors={["rgba(243, 229, 191, 0.47)", "rgba(243, 137, 130, 1)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.header}
            >
              <TitleSVG />

              <Ionicons
                name="menu"
                onPress={() => navigation.openDrawer()}
                size={35}
                style={styles.headerMenu}
              />
            </LinearGradient>
          </SafeAreaView>
        ),
      })}
      headerMode={"screen"}
    >
      <Screen name={"愛情小氣簿"} component={WrappedComponent} />
    </Navigator>
  );
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
