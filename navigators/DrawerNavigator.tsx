import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StingyNotes from "../screens/StingyNotes";
import TodoList from "../screens/TodoList";
import withOneStack from "./withOneStack";
import We from "../screens/We";

const Drawer = createDrawerNavigator();

const StingyNotesWithOneStack = withOneStack(StingyNotes);
const TodoListWithOneStack = withOneStack(TodoList);
const WeWithOneStack = withOneStack(We);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="小氣簿" component={StingyNotesWithOneStack} />
    <Drawer.Screen name="小事情 大計劃" component={TodoListWithOneStack} />
    <Drawer.Screen name="我們" component={WeWithOneStack} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
