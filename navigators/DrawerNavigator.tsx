import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StingyNotes from "../screens/StingyNotes";
import TodoList from '../screens/TodoList'
import withOneStack from "./withOneStack";

const { Navigator, Screen } = createDrawerNavigator();

const StingyNotesWithOneStack = withOneStack(StingyNotes);
const TodoListWithOneStack = withOneStack(TodoList)

const DrawerNavigator = () => (
  <Navigator>
    <Screen name="小氣簿" component={StingyNotesWithOneStack} />
    <Screen name="小事情 大計劃" component={TodoListWithOneStack}/>
  </Navigator>
);

export default DrawerNavigator;
