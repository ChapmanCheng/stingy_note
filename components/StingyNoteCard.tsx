import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {Entypo} from '@expo/vector-icons'
import { deleteStingyNote, stingyNote } from "../slices/stingyNotesSlice";
import YiuSVG from "../svg-jsx/yiu-svg";
import { useAppDispatch } from "../store/hooks";

interface props {
  item: stingyNote;
}

export default function StingyNoteCard({ item }: props) {
  const dispatch = useAppDispatch()
  const { date, sin, penalty, key } = item;
  const hasPenalty: boolean = Boolean(penalty);
  const dateString = new Date(date).toLocaleDateString("zh-hk");

  return (
    <View style={styles.card}>
      <View style={styles.dateFlexBox}>
        <Text style={styles.date}>{dateString}</Text>
        <TouchableOpacity onPress={()=>dispatch(deleteStingyNote(key))}>
          <Entypo name="cross" size={24} color="black"/>
        </TouchableOpacity>
      </View>
      <View
        style={hasPenalty ? styles.textFlexboxWithPenalty : styles.textFlexbox}
      >
        <Text style={styles.text} numberOfLines={1}>
          {sin}
        </Text>
        {hasPenalty && (
          <React.Fragment>
            <YiuSVG />
            <Text style={styles.text} numberOfLines={1}>
              {penalty}
            </Text>
          </React.Fragment>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 15,
    paddingHorizontal: 9,
    paddingVertical: 4,
    justifyContent: "space-evenly",
    borderRadius: 16,
  },
  dateFlexBox: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between"
  },
  date: {
    fontSize: 26,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  textFlexbox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textFlexboxWithPenalty: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    lineHeight: 35,
  },
});
