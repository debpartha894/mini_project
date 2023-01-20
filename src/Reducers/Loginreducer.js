const initialstate = {
    usertoken: null,
}

const changeloginstate = (state = initialstate, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state,
                usertoken: action.payload
            }
        case "LOG_OUT":
            return {
                ...state,
                usertoken: null
            }
        default :
        return state
    }
}
export default changeloginstate;