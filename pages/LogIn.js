import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native';
import userActions from '../redux/actions/userActions';

const LogIn = (props) => {

  const [loginUser, setloginUser] = useState({
    mail: '',
    contraseña: ''
  })

  const readInput = (e, campo) => {
    setloginUser({
      ...loginUser,
      [campo]: e
    })
  }

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  const sendInfo = async () => {
    if (loginUser.contraseña === "" || loginUser.mail === "") {
      showToast("Complete all fields please")
    } else {
      var response = await props.sendUserLogged(loginUser)
      if (response) {
        showToast(response)
      } else {
        setloginUser({
          mail: '',
          contraseña: ''
        })
        showToast("Successful login")
        props.navigation.navigate("Home")
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="E-mail"
          placeholderTextColor='black'
          color='black'
          style={styles.input}
          onChangeText={(e) => readInput(e, 'mail')}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor='black'
          color='black'
          style={styles.input}
          onChangeText={(e) => readInput(e, 'contraseña')}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={sendInfo}
        >
          <Text style={styles.submit}>LOG IN</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textSignUp}>You do not have an account? Click <Text
        onPress={() => { props.navigation.navigate('SignUp') }} style={styles.here}>Here</Text> </Text>
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
    backgroundColor: 'white',
    marginTop: 18,
    height: 60,
    width: "90%",
    textAlign: 'center',
    color: "black"
  },
  form: {
    backgroundColor: "#000000a0",
    width: "90%",
    alignItems: 'center'
  },
  button: {
    backgroundColor: "black",
    marginTop: 15,
    marginBottom: 15,
    height: 50,
    width: 160,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  submit: {
    color: "white"
  },
  textSignUp: {
    marginTop: 20,
    fontSize: 15
  },
  here: {
    color: "blue"
  }
});

const mapDispatchToProps = {
  sendUserLogged: userActions.sendUserLogged
}

export default connect(null, mapDispatchToProps)(LogIn)