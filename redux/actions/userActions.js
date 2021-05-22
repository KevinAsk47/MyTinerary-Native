import axios from "axios"

const userActions = {
    sendUser: (newUser) => {
        return async (dispatch, getState) => {
            try {
                var response = await axios.post("https://mytinerary-m.herokuapp.com/api/userSignUp", newUser)
                if (!response.data.success) {
                    alert("nana pibe")
                } else {
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

}

export default userActions