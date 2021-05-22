import { REGISTER } from '../type'

let initState = {
    register: JSON.parse(localStorage.getItem('register'))
}
export default function courseReducer(state = initState, action) {
    if (action.type === REGISTER) {
        localStorage.setItem('register', JSON.stringify(action.payload))
        return {
            ...state,
            register: action.payload
        }
    }
    return state
}
