
import ReatDOM from 'react-dom'
import { Link, Route, NavLink } from 'react-router-dom'
import useDeLayLink from '../hook/useDelayLink'
export const Nav = () => {
    let delayLink = useDeLayLink()
    document.body.classList.remove('active')
    return ReatDOM.createPortal(<>
        <nav className="nav">
            <ul>
                <li className="li_login" >
                    <NavLink to="#">Đăng nhập</NavLink>
                    <NavLink to="#">Đăng ký</NavLink>
                </li>
                <li className="active">
                    <NavLink exact to="/" onClick={delayLink} >Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to="/doi-ngu" onClick={delayLink}>CFD Team</NavLink>
                </li>
                <li>
                    <NavLink to="/khoa-hoc" onClick={delayLink}>Khóa Học</NavLink>
                </li>
                <li>
                    <NavLink to="/du-an" onClick={delayLink}>Dự Án</NavLink>
                </li>
                <li>
                    <NavLink to="/lien-he" onClick={delayLink}>Liên hệ</NavLink>
                </li>
            </ul>
        </nav>
        <div className="overlay_nav" onClick={delayLink} />

    </>,
        document.body,

    )
    // function removeMenu() {
    //     document.body.classList.remove('menu-is-show')
    // }


}