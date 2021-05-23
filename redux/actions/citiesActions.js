import axios from "axios"

const citiesActions = {
    fetchCities: () => {
        return async (dispatch, getState) => {
            try {
                var response = await axios.get("https://mytinerary-m.herokuapp.com/api/ciudades")
                if (!response.data.success) {
                    alert("nana pibe")
                } else {
                    return response.data.respuesta
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    fetchItinerariesByCity: (id) => {
        return async (dispatch, getState) => {
            try {
                var response = await axios.get("https://mytinerary-m.herokuapp.com/api/itinerarios/ciudad/" + id)
                if (!response.data.success) {
                    alert("nana pibe")
                } else {
                    return response.data.respuesta
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
}

export default citiesActions