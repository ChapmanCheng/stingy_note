import React from "react";
import {useSelector} from 'react-redux'
import { StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { linearGradient } from "../utilities/colors";
import { useNavigation } from "@react-navigation/native";
import {RootState} from '../store/store'
import globalStyles from "../styles/global";

export default function Home() {
  const navigation = useNavigation();
  const text = useSelector((state:RootState)=> state.value)

  return (
    <LinearGradient
      colors={linearGradient.colors}
      locations={linearGradient.locations}
      style={globalStyles.container}
    >
      <Text>{text}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
