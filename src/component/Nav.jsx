
import ReatDOM from 'react-dom'
import { Link, Route, NavLink } from 'react-router-dom'
import useDeLayLink from '../hook/useDelayLink'
export const Nav = () => {
    let delayLink = useDeLayLink()
    return ReatDOM.createPortal(<>
        <nav className="nav" onClick={delayLink}>
            <ul>
                <li className="li_login" >
                    <a href="#">Đăng nhập</a>
                    <a href="#">Đăng ký</a>
                </li>
                <li className="active">
                    <NavLink exact to="/" >Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to="/doi-ngu">CFD Team</NavLink>
                </li>
                <li>
                    <NavLink to="/khoa-hoc">Khóa Học</NavLink>
                </li>
                <li>
                    <NavLink to="du-an">Dự Án</NavLink>
                </li>
                <li>
                    <NavLink to="lien-he">Liên hệ</NavLink>
                </li>
            </ul>
        </nav>
        <div className="overlay_nav" onClick={delayLink} />

    </>,
        document.body)
    // function removeMenu() {
    //     document.body.classList.remove('menu-is-show')
    // }


}