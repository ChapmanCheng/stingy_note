import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import DrawerNavigator from "./navigators/DrawerNavigator";
import store from "./store/store";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Storage from "./Storage";
import { useAppDispatch } from "./store/hooks";
import {restoreAllStingyNotes} from './slices/stingyNotesSlice'
import {restoreAllTodoListTasks} from './slices/toDoListSlice'

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigations />
      </SafeAreaProvider>
    </Provider>
  );
}

function AppNavigations() {
  const dispatch = useAppDispatch()

  const [isReady, setIsReady] = useState(false)
  const loadAsyncStorageToRedux = async () => {
    const allKeys = await AsyncStorage.getAllKeys()
    const data = await Promise.all(allKeys.map(key => Storage.get(key)))
    const {stingys, tasks} = data.reduce((accu, task) => {
      switch (task.belongs) {
        case "stingy":
          accu.stingys.push(task)
          break;
        
        case "task": 
          accu.tasks.push(task)
          break
        default:
          console.warn('somethings wrong with ' + JSON.stringify(task))
          break;
      }
      return accu
    }, {stingys: [], tasks: []})
    dispatch(restoreAllStingyNotes(stingys))
    dispatch(restoreAllTodoListTasks(tasks))
  }

  if (!isReady) {
    return (
      <AppLoading 
        startAsync={loadAsyncStorageToRedux} 
        onFinish={()=>setIsReady(true)}
        onError={console.error}
      />
    )
  }

  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
