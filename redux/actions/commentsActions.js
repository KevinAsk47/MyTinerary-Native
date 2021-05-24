import axios from 'axios'

const commentsActions = {
    fetchComments: (info, id) => {
        return async (dispatch, getState) => {
            try {
                var response = await axios.post('https://mytinerary-m.herokuapp.com/api/comentario/' + id, info, {
                    headers: {
                        'Authorization': 'Bearer ' + info.token
                    }
                })
                if (response.data.success) {
                    return response.data.respuesta.comentarios
                }
            } catch (error) {
                console.log(error)
            }
        }
    },

    deleteComment: (id, idItinerario) => {
        return async (dispatch, getState) => {
            var response = await axios.delete('https://mytinerary-m.herokuapp.com/api/comentario/' + idItinerario, {
                data: { idComentario: id }
            })
            if (response.data.success) {
                return response.data.respuesta.comentarios
            }
        }
    },

    updateComentario: (info, idItinerario, id) => {
        return async (dispatch, getState) => {
            var response = await axios.put('https://mytinerary-m.herokuapp.com/api/comentario/' + idItinerario, { info: info, idComentario: id })
            if (response.data.success) {
                return response.data.respuesta.comentarios
            }
        }
    }
}

export default commentsActions