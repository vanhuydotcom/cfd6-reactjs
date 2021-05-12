import React from 'react'
import useDeLayLink from '../../../hook/useDelayLink'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
export default function TitleTab() {
    let { path } = useRouteMatch()
    let delayLink = useDeLayLink()
    return (
        <div className="tab-title">
            <NavLink exact to={`${path}/`} onClick={delayLink}>Thông tin tài khoản</NavLink>
            <NavLink to={`${path}/khoa-hoc-cua-ban`}>Khóa học của bạn</NavLink>
            <NavLink to={`${path}/du-an-da-lam`}>Dự án đã làm</NavLink>
            <NavLink to={`${path}/thanh-toan`}>Lịch sử thanh toán</NavLink>
            <NavLink to={`${path}/diem-thuong`}>Quản lý COIN của tôi</NavLink>
        </div>
    )
}