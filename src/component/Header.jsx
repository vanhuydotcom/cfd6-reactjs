
import Reat, { useState, useRef, useContext } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import useDeLayLink from '../hook/useDelayLink'
import { Context } from '../App'
export function Header() {

    let delayLink = useDeLayLink()
    function menuToggle() {
        document.body.classList.toggle('menu-is-show')

    }
    let { login, handleLogout } = useContext(Context)
    function popupLogin() {
        document.querySelector('.popup-login').style.display = 'flex'
    }
    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger" onClick={menuToggle}>
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo" onClick={delayLink}>
                        <img src="/img/logo.svg" alt="" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        <div className="have-login">
                            {
                                login ?
                                    <>

                                        <div className="account">
                                            <Link to="/ca-nhan" className="info">
                                                <div className="name">{login.name}</div>
                                                <div className="avatar">
                                                    <img src={login.avatar} alt="" />
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="hamberger">
                                        </div>
                                        <div className="sub">
                                            <Link to="/ca-nhan/khoa-hoc-cua-ban">Khóa học của tôi</Link>
                                            <Link to="/ca-nhan">Thông tin tài khoản</Link>
                                            <Link to="#" onClick={e => { e.preventDefault(); handleLogout() }}>Đăng xuất</Link>
                                        </div>
                                    </>
                                    :

                                    <div class="not-login bg-none">
                                        <Link to="#" class="btn-register" onClick={popupLogin}>Đăng nhập</Link>
                                        <Link to="login.html" class="btn main btn-open-login">Đăng ký</Link>
                                    </div>

                            }

                        </div>
                    </div>
                </div>
            </header>

        </>

    )
}