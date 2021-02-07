import { StackNavigationOptions } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { Route } from "@react-navigation/native";

interface screenOptionsProps {
  navigation: any,
  route: Route<string , object | undefined>
}

const getScreenOptions = ({navigation, route}: screenOptionsProps): StackNavigationOptions => ({
  title: 'Hello World',
  // headerLeft: () => (<Ionicons name='menu' onPress={()=>{}} />)
})
