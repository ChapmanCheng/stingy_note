import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { selectAllStingyNotes } from "../slices/stingyNotesSlice";
import StingyNoteCard from "./StingyNoteCard";

export default function StingyList() {
  const stingyNotes = useSelector(selectAllStingyNotes);

  return (
    <View style={styles.container}>
      <FlatList
        data={stingyNotes}
        renderItem={({ item }) => <StingyNoteCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 2,
    flexBasis: Dimensions.get("window").height * 0.6,
  },
});
