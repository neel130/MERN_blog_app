const user = JSON.parse(localStorage.getItem('user'))
export const intialState = user


export const reducer = (state, action) => {

    if (action.type === "USER") {
        return action.payload
    }

    if (action.type === "LOGOUT") {
        localStorage.clear();
        return null
    }

    if (action.type === "UPDATEPROFILE") {
        return {
            ...state,
            username: action.payload.username,
            email: action.payload.email
        }
    }


    return state;
}