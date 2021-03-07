import AsyncStorage from "@react-native-async-storage/async-storage";
import {stingyNote} from './slices/stingyNotesSlice'
import {task} from './slices/toDoListSlice'

export default class Storage {
    static async set (item: task | stingyNote) {
        try {
            const jsonData = JSON.stringify(item)
            return await AsyncStorage.setItem(item.key, jsonData)
        } catch (e) {
            console.error(e)
        }
    }
    static async get (key: string) {
        try {
            const jsonData = await AsyncStorage.getItem(key)
            if (jsonData) {
                const data = JSON.parse(jsonData)
                return data
            }
            return jsonData
        } catch (e) {
            console.error(e)
        }
    } 
    static async remove (key: string) {
        try {
            await AsyncStorage.removeItem(key)
            console.log(`item ${key} removed`)
        } catch (e) {
            console.error(e)
        }
    }
}