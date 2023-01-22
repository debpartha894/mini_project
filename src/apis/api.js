
export const homeloading = (token) => {
    return async (dispatch, getState) => {
        
        let result = await fetch("https://staging-student-api.brightchamps.com/api/v1/student-profile?phoneNumber=9714953058", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })

        result = await result.json();
        dispatch({
            type: "LOADED_HOME",
            payload: {
                username: result.data[0].student_name,
                timezone: result.data[0].timezone
            }
        })
    }
}

export const classdetailsloading = (token) => {
    return async (dispatch, getState) => {
        //const token = getState().changeloginstate.usertoken
        let result = await fetch("https://staging-student-api.brightchamps.com/api/v1/demo-class-detail?studentId=3775828", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        result = await result.json()
        dispatch({
            type: "CLASS_DETAILS",
            payload: {
                day: result.data.class_time_gmt,
                time: result.data.slot_ist
            }
        })
    }
}

export const plandetailsloading = (token) => {
    return async (dispatch, getState) => {
        //const token = getState().changeloginstate.usertoken
        let result = await fetch("https://staging-student-api.brightchamps.com/api/v1/buy-plan?studentId=2619963", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + token
            }
        })
        result = await result.json()
        dispatch({
            type: "PLAN_DETAILS",
            payload: result.data
        })
    }
}