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

const SignUp = (props) => {

  const [newUser, setNewUser] = useState({
    firstName: '', lastName: '', image: '', user: '', mail: '', password: '', country: ''
  })

  const readInput = (e, campo) => {
    setNewUser({
      ...newUser,
      [campo]: e
    })
  }

  const sendInfo = () => {
    props.sendUser(newUser)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SIGN UP</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="First Name"
          placeholderTextColor='white'
          color='white'
          style={styles.input}
          onChangeText={(e) => readInput(e, 'firstName')}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor='white'
          keyboardType='numeric'
          color='white'
          style={styles.input}
          onChangeText={(e) => readInput(e, 'lastName')}
        />
        <TextInput
          placeholder="user"
          placeholderTextColor='white'
          color='white'
          style={styles.input}
          onChangeText={(e) => readInput(e, 'user')}
        />
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
        <TextInput
          placeholder="URL"
          placeholderTextColor='white'
          color='white'
          style={styles.input}
          onChangeText={(e) => readInput(e, 'image')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={sendInfo}
        >
          <Text style={styles.submit}>SEND</Text>
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
    height: "80%",
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
  sendUser: userActions.sendUser
}

export default connect(null, mapDispatchToProps)(SignUp)