import React, { useContext, useState } from 'react'
import reactDom from 'react-dom'
import { Context } from '../App'
import useFormValidate from '../hook/useFormValidate'
import { useSelector, useDispatch } from 'react-redux'
import Auth from './../service/auth'
import { loginAction } from '../redux/action/authAction'

export default function PopupLogin() {
    let { form, error, inputChange, check } = useFormValidate({
        username: '',
        password: ''
    }, {
        rule: {
            username: {
                require: true,
                pattern: 'email'
            },
            password: {
                require: true,
                min: 6,
                max: 32
            }
        }
        ,
        mes: {
            username: {
                require: 'Enter your user name',
                pattern: 'User name is not valid'
            },
            password: {
                require: 'Enter your user password'
            }
        }
    }
    )
    // let { handleLogin } = useContext(Context)
    let dispatch = useDispatch()
    let [loginError, setLoginError] = useState(null)
    function closePopup() {
        document.querySelector('.popup-login').style.display = 'none'

    }
    async function loginHandle() {
        let errorObject = check()
        if (Object.keys(errorObject).length === 0) {
            // let res = await handleLogin(form.username, form.password)
            // if (res.success) {
            //     closePopup()
            // } else if (res.error) {
            //     setLoginError(res.error)
            // }
            let res = await Auth.login({
                username: form.username,
                password: form.password
            })
            if (res.data) {
                // dispatch({
                //     type: 'LOGIN',
                //     payload: res.data
                // })
                dispatch(loginAction(res.data))
                closePopup()
            }
            else if (res.error) {
                setLoginError(res.error)
            }
        }
    }

    return reactDom.createPortal(
        <div className="popup-form popup-login" style={{ display: 'none' }}>
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: 'block' }}>
                    <h2 className="title">Đăng nhập</h2>
                    <input value={form.username} name='username' onChange={inputChange} type="text" placeholder="Email / Số điện thoại" />
                    {
                        error.username && <p className="error_text">{error.username}</p>
                    }
                    {loginError && <p className="error_text">{loginError}</p>}
                    <input value={form.password} name='password' onChange={inputChange} type="password" placeholder="Mật khẩu" />
                    {
                        error.password && <p className="error_text">{error.password}</p>
                    }
                    <div className="remember">
                        <label className="btn-remember">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <p>Nhớ mật khẩu</p>
                        </label>
                        <a href="#" className="forget">Quên mật khẩu?</a>
                    </div>
                    <div className="btn rect main btn-login" onClick={loginHandle}>đăng nhập</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="/img/google.svg" alt="" />
                  Google
                </div>
                    </div>
                    <div className="close">
                        <img src="/img/close-icon.png" alt="" />
                    </div>
                </div>
                {/* email form */}
                <div className="ct_email">
                    <h2 className="title">Đặt lại mật khẩu</h2>
                    <input type="text" placeholder="Email" />
                    <div className="btn rect main btn-next">Tiếp theo</div>
                    <div className="back" />
                    <div className="close" onClick={closePopup}>
                        <img src="/img/close-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}