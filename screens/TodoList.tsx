import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import LinearGradientBackground from "../utilities/LinearGradientBackground";

export default function todoList() {
  return (
    <LinearGradientBackground>
      <View style={{alignItems: 'center'}}>

      <Image style={styles.imgTitle} width={Dimensions.get('window').width}  source={require('../assets/todoListTitle.png')}/>
      </View>
      
    </LinearGradientBackground>
  );
}

const styles = StyleSheet.create({
  imgTitle: {
    // width: Dimensions.get('window').width,
    // height: 250
  }
});
