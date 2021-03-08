import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import globalStyles from "../styles/global";
import { StyleSheet, useWindowDimensions, ViewProps, ViewStyle } from "react-native";
import HeartSVG from "../svg-jsx/HeartSVG";

interface props extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function LinearGradientBackground({ children, style }: props) {
  const {width, height}= useWindowDimensions()
  const getRanWidth = () => Math.random() * width;
  const getRanHeight = () => Math.random() * height; 
  const getHeartBackground = () => Array(40).fill(null).map(()=><HeartSVG style={{...styles.heartSVG, top: getRanHeight(), left: getRanWidth()}}/>)
  return (
    <LinearGradient
      colors={linearGradient.colors}
      locations={linearGradient.locations}
      style={{ ...globalStyles.container, ...style }}
    >
      {getHeartBackground()}
      {children}
    </LinearGradient>
  );
}

const linearGradient: LinearGradientProps = {
  colors: ["#fff", "rgba(239, 98, 227, 0.5)", "rgba(60, 90, 193, 0.5)"],
  locations: [0.05, 0.7, 1],
};

const styles = StyleSheet.create({
  heartSVG: {
    position: "absolute",
  }
})