import { LOGIN, LOGOUT, SAVE } from '../type'
export function loginAction(data) {
    return {
        type: LOGIN,
        payload: data
    }
}
export function logoutAction() {
    return {
        type: LOGOUT,
    }
}
export function saveInfoAction(data) {
    return {
        type: SAVE,
        payload: data
    }
}