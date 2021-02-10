import React from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { selectAllStingyNotes, stingyNote } from "../slices/stingyNotesSlice";
import StingyNoteCard from "./StingyNoteCard";

export default function StingyList() {
  const stingyNotes = useSelector(selectAllStingyNotes);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={stingyNotes}
        keyExtractor={({ date }) => date.toString()}
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
