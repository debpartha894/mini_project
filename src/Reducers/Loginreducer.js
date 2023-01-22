const initialstate = {
    usertoken: null,
    user_name : "",
    class_date : "",
    class_slot : "",
    plans : [],
    timezone : ""
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
                user_name : null,
                usertoken: null,
            }
        case "LOADED_HOME": 
            return {
                ...state,
                user_name : action.payload.username,
                timezone : action.payload.timezone

            }
        case "CLASS_DETAILS" :
            return {
                ...state,
                class_date : action.payload.day,
                class_slot : action.payload.time
            }
        case "PLAN_DETAILS" : 
            return {
                ...state,
                plans : action.payload
            }
        default :
        return state
    }
}

export default changeloginstate;