import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { linearGradient } from './utilities/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={linearGradient.colors}
        locations={linearGradient.locations}
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
