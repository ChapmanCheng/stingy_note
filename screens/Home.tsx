import React from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../store/store";
import LinearGradientBackground from "../utilities/LinearGradientBackground";
import Stingyform from "../components/Stingyform";

export default function Home() {
  const navigation = useNavigation();
  const text = useSelector((state: RootState) => state.test.value);

  return (
    <LinearGradientBackground>
      <Stingyform />
    </LinearGradientBackground>
  );
}
