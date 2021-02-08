import React from "react";
import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import globalStyles from "../styles/global";

interface props {
  children: JSX.Element | JSX.Element[];
}

export default function LinearGradientBackground(props: props) {
  return (
    <LinearGradient
      colors={linearGradient.colors}
      locations={linearGradient.locations}
      style={globalStyles.container}
    >
      {props.children}
    </LinearGradient>
  );
}


const linearGradient: LinearGradientProps = {
  colors: ["#fff", "rgba(239, 98, 227, 0.5)", "rgba(60, 90, 193, 0.5)"],
  locations: [0.05, 0.7, 1],
};