import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native'

const LogIn = () => {
  const [newUser, setNewUser] = useState({
    firstName: '', lastName: '', image: '', user: '', mail: '', password: ''
  })

  const readInput = (e, campo) => {
    setNewUser({
      ...newUser,
      [campo]: e
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

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

export default LogIn