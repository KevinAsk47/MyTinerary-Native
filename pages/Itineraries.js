import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const Itineraries = () => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>hola soy Itineraries</Text>
        </ScrollView>
        <StatusBar style="auto" hidden={true} />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      width: "100%",
      height: "100%"
    },
    text: {
      fontSize: 42,
    },
});

export default Itineraries