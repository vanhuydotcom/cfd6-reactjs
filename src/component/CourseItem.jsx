import React from 'react'
import { Link } from 'react-router-dom'
import useDeLayLink from '../hook/useDelayLink'
export function CourceItem({ name, des, img, teach_name, teach_avatar, status }) {
    // status = 'dang-dien-ra | da-ket-thuc | sap-dien-ra'
    let delayLink = useDeLayLink()
    return (
        <div className="col-md-4 course">
            <div className="wrap">
                <Link className="cover" to="/chi-tiet-khoa-hoc">
                    <img src={img} alt="" />
                    {
                        status === 'da-ket-thuc' ? <span className="badge b1">Đã kết thúc</span> :
                            status === 'dang-dien-ra' ? <span className="badge b2">Đang diễn ra</span> :
                                <span className="badge b3">Sắp diễn ra</span>
                    }

                    <div className="hover">
                        <div className="top">
                            <div className="user">
                                <img src="/img/icon-user-white.svg" alt="" />
      12
    </div>
                            <div className="heart">
                                <img src="/img/icon-heart.svg" alt="" /> 100
    </div>
                        </div>
                        <div className="share">
                            <img src="/img/icon-viewmore.svg" alt="" />
                        </div>
                    </div>
                </Link>
                <div className="info">
                    <Link className="name" to="/chi-tiet-khoa-hoc/">
                        {name}
                    </Link>
                    <p className="des">
                        {des}
                    </p>
                </div>
                <div className="bottom">
                    <div className="teacher">
                        <div className="avatar">
                            <img src="/img/avt.png" alt="" />
                        </div>
                        <div className="name">{teach_name}</div>
                    </div>
                    <div className="register-btn"><Link to="/dang-ky" onClick={delayLink}>Đăng Ký</Link></div>
                </div>
            </div>
        </div>
    )
}