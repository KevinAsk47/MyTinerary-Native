import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

const userActions = {
    sendUser: (newUser) => {
        return async (dispatch, getState) => {
            try {
                var response = await axios.post("https://mytinerary-m.herokuapp.com/api/userSignUp", newUser)
                if (!response.data.success) {
                    alert("nana pibe")
                } else {
                    await AsyncStorage.setItem('usuarioLogueado', JSON.stringify({ imagen: response.data.respuesta.foto, usuario: response.data.respuesta.usuario }))
                    await AsyncStorage.setItem('token', response.data.respuesta.token)
                    dispatch({
                        type: "LOAD_USER",
                        payload: response.data.success ? response.data.respuesta : null
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    sendUserLogged: (loginUser) => {
        return async (dispatch, getState) => {
            try {
                var response = await axios.post("https://mytinerary-m.herokuapp.com/api/userLogIn", loginUser)
                if (!response.data.success) {
                    alert("nana pibe")
                } else {
                    await AsyncStorage.setItem('usuarioLogueado', JSON.stringify({ imagen: response.data.respuesta.imagen, usuario: response.data.respuesta.usuario }))
                    await AsyncStorage.setItem('token', response.data.respuesta.token)
                    dispatch({
                        type: "LOAD_USER",
                        payload: response.data.success ? response.data.respuesta : null
                    })
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            await AsyncStorage.clear()
            dispatch({ type: "LOG_OUT", payload: null })
        }
    },
    forzarLoginLocalStore: (userLoggedInfo) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get("https://mytinerary-m.herokuapp.com/api/user/loginLS", {
                    headers: {
                        'Authorization': 'Bearer ' + userLoggedInfo.token
                    }
                })
                dispatch({
                    type: "LOAD_USER", payload: {
                        ...response.data.respuesta,
                        token: userLoggedInfo.token
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}

export default userActions