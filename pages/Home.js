import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Carousel from '../components/Carousel';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Hero />
          <Carousel />
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
      backgroundColor: "blue",
      width: "100%",
      height: "100%"
    },
    text: {
      fontSize: 42,
    },
});

export default Home