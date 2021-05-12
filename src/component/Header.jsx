
import Reat, { useState, useRef } from 'react'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import useDeLayLink from '../hook/useDelayLink'
export function Header() {

    let delayLink = useDeLayLink()
    function menuToggle() {
        document.body.classList.toggle('menu-is-show')

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
                            <div className="account">
                                <Link to="/ca-nhan" className="info">
                                    <div className="name">Trần Lê Trọng Nghĩa</div>
                                    <div className="avatar">
                                        <img src="/img/avt.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link to="/ca-nhan/khoa-hoc-cua-ban">Khóa học của tôi</Link>
                                <Link to="/ca-nhan">Thông tin tài khoản</Link>
                                <Link to="#">Đăng xuất</Link>
                            </div>
                        </div>
                        {/* <div class="not-login bg-none">
                  <a href="#" class="btn-register">Đăng nhập</a>
                  <a href="login.html" class="btn main btn-open-login">Đăng ký</a>
              </div> */}
                    </div>
                </div>
            </header>

        </>

    )
}