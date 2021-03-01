import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Button from "../components/Button";
import TodoCard, { styles as todoStyle } from "../components/TodoCard";
import LinearGradientBackground from "../utilities/LinearGradientBackground";
import { addTodo, selectAllToDoList } from "../slices/toDoListSlice";

export interface task {
  content: string;
  completed: boolean;
  key: string;
}

export default function todoList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectAllToDoList);
  const [newTodo, setNewTodo] = useState("");

  const updateNewTodo = (text: string) => setNewTodo(text);
  const add = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <LinearGradientBackground style={{ justifyContent: "space-between" }}>
      <View style={{ alignItems: "center" }}>
        <Image
          width={Dimensions.get("window").width}
          source={require("../assets/todoListTitle.png")}
        />
      </View>
      <View style={styles.listContainer}>
        {/* new input value */}
        <View style={todoStyle.card}>
          <Entypo name="circle" size={32} color="grey" />
          <TextInput
            style={styles.newTodoInput}
            value={newTodo}
            onChangeText={updateNewTodo}
            placeholder="New Todo..."
          />
          <Entypo name="cross" size={24} color="grey" />
        </View>
        {/* new input value */}

        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoCard item={item} />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button handlePress={add}>新加清單</Button>
      </View>
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    marginTop: 32,
    maxHeight: 400,
  },
  buttonContainer: {
    marginHorizontal: 50,
    marginBottom: 40,
  },
  newTodoInput: {
    fontSize: 28,
    flexGrow: 1,
    marginHorizontal: 10,
    borderBottomWidth: 1,
  },
});
