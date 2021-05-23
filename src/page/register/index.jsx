import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useFormValidate from '../../hook/useFormValidate'
import CourseApi from "../../service/courseApi"
import { RegisterAction } from '../../redux/action/courseAction'
import { useParams } from "react-router"


export function Register() {
    let dispatch = useDispatch()
    let { slug } = useParams()
    let [course, setCourse] = useState({
        courseInfo: {},
        register: ""
    })
    let data = useSelector((state) => state.auth)
    let { login } = useSelector((state) => state.auth)
    useEffect(() => {
        CourseApi.ListDetail(slug)
            .then(res => {
                setCourse({
                    ...course,
                    courseInfo: res.data,
                    err: false
                })
            })
    }, [])
    let { form, error, inputChange, check } = useFormValidate({
        ...login

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
            fb: {
                require: true,
                pattern: 'fb'
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
            fb: {
                require: 'Enter your Url facebook',
                pattern: 'Url facebook is not valid'
            },


        }
    })
    async function onSubmit() {
        let errorObject = check()
        if (Object.keys(errorObject).length === 0) {
            let res = await CourseApi.CourseRegister(form, slug)
            if (res.success) {
                setCourse({
                    ...course,
                    register: res.success,
                    err: true
                })

            }
            else if (res.error) {
                setCourse({
                    ...course,
                    register: res.error
                })
            }
        }
    }


    return (
        <main className="register-course" id="main">
            <section>
                <div className="container">
                    <div className="wrap container">
                        <div className="main-sub-title">ĐĂNG KÝ</div>
                        <h1 className="main-title">{course?.courseInfo?.title}</h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai giảng:</strong> {course?.courseInfo?.opening_time}</div>
                            <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
                            <div className="time"><strong>Học phí:</strong> {course?.courseInfo?.money} VND</div>
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
                                <input value={form.fb} name="fb" onChange={inputChange} type="text" placeholder="https://facebook.com" />
                                {
                                    error.fb && <p className="error_text">{error.fb}</p>
                                }
                            </label>
                            <label className="disable">
                                <p>Sử dụng COIN</p>
                                <div className="checkcontainer">
                                    Hiện có <strong>300 COIN</strong>
                                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                    {/* Cần ít nhất 200 COIN để giảm giá */}
                                    <input type="checkbox" name="ckecked" defaultChecked="checked" />
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
                            {course.register && (
                                <h2 style={{ color: `${course.err ? "#00afab" : "red"}` }}>
                                    {course.register}
                                </h2>
                            )}
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