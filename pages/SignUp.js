import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
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
import SelectPicker from 'react-native-form-select-picker';

const SignUp = (props) => {
  const [newUser, setNewUser] = useState({
    nombre: '',
    apellido: '',
    usuario: '',
    mail: '',
    contraseña: '',
    imagen: '',
    pais: ''
  })

  const [countries, setCountries] = useState([])
  const [errors, setErrors] = useState([])

  const readInput = (e, campo) => {
    setNewUser({
      ...newUser,
      [campo]: e
    })
  }

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  const fetchCountries = async () => {
    try {
      var response = await fetch("https://restcountries.eu/rest/v2/all")
      var data = await response.json()
      setCountries(data)
    } catch (error) {
      console.log(error)
    }
  }

  const sendInfo = async () => {
    if (Object.values(newUser).some(valor => valor === "")) {
      showToast('Complete all fields please')
    } else {
      var response = await props.sendUser(newUser)
      if (response) {
        response.details ? setErrors(response.details) : showToast(response)
      } else {
        setNewUser({
          nombre: '',
          apellido: '',
          usuario: '',
          mail: '',
          contraseña: '',
          imagen: '',
          pais: ''
        })
        props.navigation.navigate("Home")
        showToast("Successful login")
      }
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <TextInput
            placeholder="First Name"
            placeholderTextColor='black'
            color='black'
            style={styles.input}
            onChangeText={(e) => readInput(e, 'nombre')}
          />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor='black'
            color='black'
            style={styles.input}
            onChangeText={(e) => readInput(e, 'apellido')}
          />
          <TextInput
            placeholder="user"
            placeholderTextColor='black'
            color='black'
            style={styles.input}
            onChangeText={(e) => readInput(e, 'usuario')}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor='black'
            color='white'
            style={styles.input}
            onChangeText={(e) => readInput(e, 'mail')}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor='black'
            color='black'
            style={styles.input}
            onChangeText={(e) => readInput(e, 'contraseña')}
          />
          <TextInput
            placeholder="URL"
            placeholderTextColor='black'
            color='black'
            style={styles.input}
            onChangeText={(e) => readInput(e, 'imagen')}
          />
          <SelectPicker default="Choose a country"
            onValueChange={(e) => readInput(e, "pais")}
            placeholderStyle={{ color: 'black' }}
            label="Country"
            style={styles.input}
            placeholder='Country'
          >
            {countries.map((country) => (<SelectPicker.Item label={country.name} value={country.name} key={country.name} />))}
          </SelectPicker>
          <TouchableOpacity
            activeOpacity={.01}
            style={styles.button}
            onPress={sendInfo}
          >
            <Text style={styles.submit}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textLogIn}>Do you already have an account? Click <Text
          onPress={() => { props.navigation.navigate('LogIn') }} style={styles.here}>Here</Text> </Text>
        {
          errors.map((error, index) => <Text style={styles.textErrors} key={index}>*{error.message}</Text>)
        }
        <StatusBar style="auto" hidden={true} />
      </SafeAreaView>
    </ScrollView>
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
  textErrors: {
    fontSize: 30,
    color: "red"
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
    width: "90%",
    alignItems: 'center',
    backgroundColor: "#000000a0"
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
  textLogIn: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 18
  },
  here: {
    color: "blue"
  }
});

const mapDispatchToProps = {
  sendUser: userActions.sendUser
}

export default connect(null, mapDispatchToProps)(SignUp)