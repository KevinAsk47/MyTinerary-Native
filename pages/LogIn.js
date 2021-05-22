import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import userActions from '../redux/actions/userActions';

const LogIn = (props) => {

  const [loginUser, setloginUser] = useState({
    mail: '', password: ''
  })

  const readInput = (e, campo) => {
    setloginUser({
      ...loginUser,
      [campo]: e
    })
  }

  const sendInfo = () => {
    props.sendUserLogged(loginUser)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>LOG IN</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor='white'
          color='white'
          style={styles.input}
          onChangeText={(e) => readInput(e, 'mail')}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor='white'
          color='white'
          style={styles.input}
          onChangeText={(e) => readInput(e, 'password')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={sendInfo}
        >
          <Text style={styles.submit}>LOG IN</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    marginBottom: 20
  },
  input: {
    backgroundColor: 'red',
    marginTop: 18,
    height: 60,
    width: "90%",
    textAlign: 'center'
  },
  form: {
    backgroundColor: "blue",
    height: "40%",
    width: "90%",
    alignItems: 'center'
  },
  button: {
    backgroundColor: "black",
    marginTop: 15,
    height: 50,
    width: 160,
    alignItems: "center",
    justifyContent: "center"
  },
  submit: {
    color: "white"
  }
});

const mapDispatchToProps = {
  sendUserLogged: userActions.sendUserLogged
}

export default connect(null, mapDispatchToProps)(LogIn)