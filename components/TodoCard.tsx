import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { task } from "../screens/TodoList";
import { deleteTodo, toggleComplete } from "../slices/toDoListSlice";

interface props {
  item: task;
}

export default function TodoCard({ item }: props) {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={{ position: "relative" }}
        onPress={() => dispatch(toggleComplete(item.key))}
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
      <Text
        style={{
          ...styles.text,
          textDecorationLine: item.completed ? "line-through" : "none",
        }}
      >
        {item.content}
      </Text>

      <TouchableOpacity onPress={() => dispatch(deleteTodo(item.key))}>
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
