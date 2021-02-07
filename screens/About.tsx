import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LinearGradientBackground from "../utilities/LinearGradientBackground";
export default function About() {
  return (
    <LinearGradientBackground>
      <View>
        <Text>About</Text>
      </View>
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({});
