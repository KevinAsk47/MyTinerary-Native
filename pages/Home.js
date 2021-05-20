import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
            <Hero />
            <StatusBar style="auto" hidden={true} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        height: "100%"
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    video: {
        height: "100%",
        width: "100%"
    },
});

export default Home