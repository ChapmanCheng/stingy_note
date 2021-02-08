import React from "react";
import LinearGradientBackground from "../utilities/LinearGradientBackground";
import Stingyform from "../components/Stingyform";
import StingyList from "../components/StingyList";

export default function StingyNotes() {
  return (
    <LinearGradientBackground>
      <Stingyform />
      <StingyList />
    </LinearGradientBackground>
  );
}
