import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { backgroundColor } from './utilities/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={backgroundColor}
        locations={[0.05, 0.7, 1]}
        style={styles.linearBg}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </LinearGradient>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  linearBg: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
});
