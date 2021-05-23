const initialState = {
    user: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOAD_USER":
            return {
                ...state,
                user: action.payload
            }
            break
        case "LOG_OUT":
            return {
                ...state,
                user: action.payload
            }
            break
        default:
            return state
    }
}

export default userReducer