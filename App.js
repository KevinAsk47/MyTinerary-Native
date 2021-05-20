import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Home from './pages/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Home />
      </ScrollView>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
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

export default App;
