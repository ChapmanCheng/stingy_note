import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import LinearGradientBackground from '../utilities/LinearGradientBackground'

export default function We() {
    return (   
        <LinearGradientBackground>
            <Image source={require('../assets/boyface.png')} />
            <Image source={require('../assets/girlface.png')} />
        </LinearGradientBackground>
    )
}

const styles = StyleSheet.create({})
