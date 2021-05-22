import { useContext } from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router"
import { Context } from "../App"

export default function PrivateRoute(prop) {
    let { login } = useSelector((state) => state.auth)
    if (!login) {
        setTimeout(() => {
            document.querySelector('.popup-login').style.display = 'flex'
        }, 0)
        return <Redirect path="/" />
    }
    return <Route {...prop} />
}