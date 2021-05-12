import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useDeLayLink from '../hook/useDelayLink'
export function Footer() {
    let delayLink = useDeLayLink()
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 left">
                        <p className="des">
                            Sáng tạo, tinh tế và phù hợp sẽ khiến
                            sản phẩm của bạn trở nên khác biệt.
              </p>
                        <p className="address">
                            Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
              </p>
                        <p className="phone">(+84) 98 9596 913</p>
                        <div className="social">
                            <a className="fb" href="#">
                                {/* <img src="img/icon-fb.svg" alt=""> */}
                            </a>
                            <a className="gmail" href="#">
                                {/* <img src="img/icon-gmail.svg" alt=""> */}
                            </a>
                            <a className="skype" href="#">
                                {/* <img src="img/icon-skype.svg" alt=""> */}
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/">Trang chủ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/khoa-hoc">Khóa học</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/thanh-toan">Thanh toán</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dieu-khoan">Điều khoản</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <a href="#" className="back-to-top">
                    <div className="line" />
            CUỘN LÊN
          </a>
            </div>
            <div className="copy-right">
                <div className="container">
                    <p>2020 Creative Front-End Dev</p>
                    <p>Được thiết kế và lập trình bởi CFD Team</p>
                </div>
            </div>
        </footer>
    )
}