import { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Context } from '../../../App'
export default function Info() {
    // let { login } = useContext(Context)
    let { login } = useSelector(store => store.auth)
    return (
        <div className="top-info">
            <div className="avatar">
                {/* <span class="text">H</span> */}
                <img src={login.avatar} alt="" />
                <div className="camera" />
            </div>
            <div className="name">{login.name}</div>
            <p className="des">Thành viên của team CFD1-OFFLINE</p>
        </div>
    )
}