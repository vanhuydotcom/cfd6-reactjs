import React, { useState } from 'react'
import reactDom from 'react-dom'

export default function PopupRegister() {
    return reactDom.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }}>
            <div className="wrap">
                <h2 className="title">Đăng ký</h2>
                <div className="btn btn-icon rect white btn-google">
                    <img src="img/google.svg" alt="" />
            Google
          </div>
                <p className="policy">
                    Bằng việc đăng kí, bạn đã đồng ý <a href="#">Điều khoản bảo mật</a> của CFD
          </p>
                <div className="close">
                    <img src="img/close-icon.png" alt="" />
                </div>
            </div>
        </div>,
        document.body
    )
}