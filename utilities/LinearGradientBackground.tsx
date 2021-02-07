import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { linearGradient } from "./colors";
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
      {...props}
    >
      {props.children}
    </LinearGradient>
  );
}
