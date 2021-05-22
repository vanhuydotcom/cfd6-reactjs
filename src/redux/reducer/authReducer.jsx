import { LOGIN, LOGOUT, SAVE } from '../type'


let initState = {
    login: JSON.parse(localStorage.getItem('login')) || false,
}
export default function authReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('login', JSON.stringify(action.payload))
            return {
                ...state,
                login: action.payload
            }
        case LOGOUT:
            localStorage.setItem('login', false)
            return {
                ...state,
                login: false
            }
        case SAVE:
            localStorage.setItem('login', JSON.stringify(action.payload))
            return {
                ...state,
                login: action.payload
            }
        default:
            return state;
    }

    return state
}
