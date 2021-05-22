import { REGISTER } from '../type'
export function RegisterAction(data) {
    return {
        type: REGISTER,
        payload: data
    }
}