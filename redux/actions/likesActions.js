import axios from 'axios'

const likesActions = {
    likedItinerary: (id, info) => {
        return async (dispatch, getState) => {
            var response = await axios.post('https://mytinerary-m.herokuapp.com/api/like/' + id, info, {
                headers: {
                    'Authorization': 'Bearer ' + info.token
                }
            })
            if (response.data.success) {
                return response.data.respuesta
            } else {
                console.log(response.data.respuesta)
            }
        }
    }
}

export default likesActions