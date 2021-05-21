import { createStore, combineReducers } from 'redux'
import authReducer from './reducer/authReducer'
import courseReducer from './reducer/courseReducer'
let reducer = combineReducers({
    auth: authReducer,
    course: courseReducer
})

let store = createStore(reducer)
export default store