import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { linearGradient } from "../utilities/colors";
import globalStyles from "../styles/global";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={linearGradient.colors}
      locations={linearGradient.locations}
      style={globalStyles.container}
    >
      <Text>Home</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
