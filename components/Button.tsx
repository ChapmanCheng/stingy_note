import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface props  {
    handlePress: () => void
    children: string
}

export default function Button({handlePress, children}: props) {
    return (
        <TouchableOpacity style={styles.submitBtn} onPressOut={handlePress}>
          <Text style={styles.submitPlus}>+</Text>
          <Text style={styles.submitText}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    submitBtn: {
      backgroundColor: "#FFF2F2",
      borderRadius: 30,
      minWidth: 125,
      padding: 4,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    submitPlus: {
      fontSize: 30,
      textAlign: "center",
      // fontFamily: "Norican",
      fontStyle: "italic",
      color: "#FFF",
      backgroundColor: "#F4D4D4",
      width: 30,
      height: 30,
      lineHeight: 32,
      borderRadius: 18,
    },
    submitText: {
      fontSize: 24,
      // fontFamily: "Noto Sans Tamil",
      color: "#8B7878",
      letterSpacing: 0.1 * 8,
    },})
