
import React, { useState, useRef, useContext } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import useDeLayLink from '../hook/useDelayLink'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAction } from '../redux/action/authAction'
import LOGOUT from '../redux/type'
export function Header() {
    let { login } = useSelector(store => store.auth)
    let dispatch = useDispatch()
    let delayLink = useDeLayLink()
    function menuToggle() {
        document.body.classList.toggle('menu-is-show')
    }
    // let { handleLogout } = useContext(Context)
    function popupLogin() {
        document.querySelector('.popup-login').style.display = 'flex'
    }
    function logout(e) {
        e.preventDefault()
        dispatch(logoutAction())
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
                                            <Link to="/ca-nhan/khoa-hoc-cua-ban">Kh??a h???c c???a t??i</Link>
                                            <Link to="/ca-nhan">Th??ng tin t??i kho???n</Link>
                                            <Link to="#" onClick={logout}>????ng xu???t</Link>
                                        </div>
                                    </>
                                    :

                                    <div class="not-login bg-none">
                                        <Link to="#" class="btn-register" onClick={popupLogin}>????ng nh???p</Link>
                                        <Link to="login.html" class="btn main btn-open-login">????ng k??</Link>
                                    </div>

                            }

                        </div>
                    </div>
                </div>
            </header>

        </>

    )
}