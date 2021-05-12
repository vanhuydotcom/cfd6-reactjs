import React, { useRef, useState } from "react"
import useFormValidate from '../../hook/useFormValidate'
export function Register() {
    let { form, error, inputChange, check } = useFormValidate({
        name: "",
        phone: "",
        email: "",
        facebook: "",

    }, {
        rule: {
            name: {
                require: true
            },
            phone: {
                require: true,
                pattern: 'phone'
            },
            email: {
                require: true,
                pattern: 'email'
            },
            facebook: {
                require: true,
                pattern: 'facebook'
            },


        },
        mes: {
            name: {
                require: 'Enter your name'
            },
            phone: {
                require: ' Enter your phone',
                pattern: 'Phone is not valid'
            },
            email: {
                require: 'Enter your email',
                pattern: 'Email is not valid'
            },
            facebook: {
                require: 'Enter your Url facebook',
                pattern: 'Url facebook is not valid'
            }


        }
    })

    function onSubmit() {
        let errorObject = check()
        if (Object.keys(errorObject).length === 0) {
            console.log(form);
        }
    }
    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">Thực chiến front-end căn bản </h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> 15/11/2020</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> 6.000.000 VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>Họ và tên<span>*</span></p>
                                <input value={form.name} name="name" onChange={inputChange} type="text" placeholder="Họ và tên bạn" />
                                {
                                    error.name && <p className="error_text">{error.name}</p>
                                }
                            </label>
                            <label>
                                <p>Số điện thoại<span>*</span></p>
                                <input value={form.phone} name="phone" onChange={inputChange} type="text" placeholder="Số điện thoại" />
                                {
                                    error.phone && <p className="error_text">{error.phone}</p>
                                }
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input value={form.email} name="email" onChange={inputChange} type="text" placeholder="Email của bạn" />
                                {
                                    error.email && <p className="error_text">{error.email}</p>
                                }
                            </label>
                            <label>
                                <p>URL Facebook<span>*</span></p>
                                <input value={form.facebook} name="facebook" onChange={inputChange} type="text" placeholder="https://facebook.com" />
                                {
                                    error.facebook && <p className="error_text">{error.facebook}</p>
                                }
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>Hình thức thanh toán</p>
                                <div className="select">
                                    <div className="head">Chuyển khoản</div>
                                    <div className="sub">
                                        <a href="#">Chuyển khoản</a>
                                        <a href="#">Thanh toán tiền mặt</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>Ý kiến cá nhân</p>
                                <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
                            </label>
                            <div className="btn main rect" onClick={onSubmit}>đăng ký</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
        </main>
    )
}