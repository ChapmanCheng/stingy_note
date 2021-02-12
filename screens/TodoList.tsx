import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Button from "../components/Button";
import TodoCard, { styles as todoStyle } from "../components/TodoCard";
import LinearGradientBackground from "../utilities/LinearGradientBackground";
import { TextInput } from "react-native-gesture-handler";

export interface task {
  content: string;
  completed: boolean;
  key: number;
}

export default function todoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<task[]>([
    {
      content: "同小寶食芝士火鍋",
      completed: true,
      key: 1,
    },
    {
      content: "同小寶過白色聖誕",
      completed: false,
      key: 2,
    },
  ]);

  const handleComplete = (key: number) =>
    setTodos(
      todos.map((todo) => {
        if (todo.key === key) todo.completed = !todo.completed;
        return todo;
      })
    );

  const handleDelete = (key: number) =>
    setTodos(todos.filter((todo) => todo.key !== key));

  const changeNewTodo = (text: string) => setNewTodo(text);
  const addnewTodo = () => {
    setTodos([
      ...todos,
      {
        completed: false,
        content: newTodo,
        key: Math.random(),
      },
    ]),
      setNewTodo("");
  };

  return (
    <LinearGradientBackground style={{justifyContent: 'space-between'}}>
        <View style={{ alignItems: "center" }}>
          <Image
            width={Dimensions.get("window").width}
            source={require("../assets/todoListTitle.png")}
          />
        </View>
        <View style={styles.flatList}>
          <View style={todoStyle.card}>
            <Entypo name="circle" size={32} color="grey" />
            <TextInput
              style={styles.newTodoInput}
              value={newTodo}
              onChangeText={changeNewTodo}
              placeholder="New Todo..."
            />
            <Entypo name="cross" size={24} color="grey" />
          </View>

          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoCard
                item={item}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
              />
            )}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button handlePress={addnewTodo}>新加清單</Button>
        </View>
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({
  flatList: {
    marginTop: 32,
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
