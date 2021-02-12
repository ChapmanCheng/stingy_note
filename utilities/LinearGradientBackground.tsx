import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import globalStyles from "../styles/global";
import { ViewProps, ViewStyle } from "react-native";

interface props extends ViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export default function LinearGradientBackground({ children, style }: props) {
  return (
    <LinearGradient
      colors={linearGradient.colors}
      locations={linearGradient.locations}
      style={{ ...globalStyles.container, ...style }}
    >
      {children}
    </LinearGradient>
  );
}

const linearGradient: LinearGradientProps = {
  colors: ["#fff", "rgba(239, 98, 227, 0.5)", "rgba(60, 90, 193, 0.5)"],
  locations: [0.05, 0.7, 1],
};
