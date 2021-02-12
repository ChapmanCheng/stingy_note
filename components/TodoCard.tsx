import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { task } from "../screens/TodoList";
import { Entypo } from "@expo/vector-icons";

interface props {
  item: task;
  handleComplete: (key: number) => void;
  handleDelete: (key: number) => void;
}

export default function TodoCard({
  item,
  handleDelete,
  handleComplete,
}: props) {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={{ position: "relative" }}
        onPress={() => handleComplete(item.key)}
      >
        <Entypo name="circle" size={32} color="black" />
        {item.completed && (
          <Entypo
            style={{ position: "absolute" }}
            name="check"
            size={32}
            color="black"
          />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>{item.content}</Text>

      <TouchableOpacity onPress={() => handleDelete(item.key)}>
        <Entypo name="cross" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  text: {
    fontSize: 28,
  },
});
