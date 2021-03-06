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
                        <div className="main-sub-title">????NG K??</div>
                        <h1 className="main-title">{course?.courseInfo?.title}</h1>
                        <div className="main-info">
                            <div className="date"><strong>Khai gi???ng:</strong> {course?.courseInfo?.opening_time}</div>
                            <div className="time"><strong>Th???i l?????ng:</strong> 18 bu???i</div>
                            <div className="time"><strong>H???c ph??:</strong> {course?.courseInfo?.money} VND</div>
                        </div>
                        <div className="form">
                            <label>
                                <p>H??? v?? t??n<span>*</span></p>
                                <input value={form.name} name="name" onChange={inputChange} type="text" placeholder="H??? v?? t??n b???n" />
                                {
                                    error.name && <p className="error_text">{error.name}</p>
                                }
                            </label>
                            <label>
                                <p>S??? ??i???n tho???i<span>*</span></p>
                                <input value={form.phone} name="phone" onChange={inputChange} type="text" placeholder="S??? ??i???n tho???i" />
                                {
                                    error.phone && <p className="error_text">{error.phone}</p>
                                }
                            </label>
                            <label>
                                <p>Email<span>*</span></p>
                                <input value={form.email} name="email" onChange={inputChange} type="text" placeholder="Email c???a b???n" />
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
                                <p>S??? d???ng COIN</p>
                                <div className="checkcontainer">
                                    Hi???n c?? <strong>300 COIN</strong>
                                    {/* Gi???m gi?? c??n <span><strong>5.800.000 VND</strong>, c??n l???i 100 COIN</span> */}
                                    {/* C???n ??t nh???t 200 COIN ????? gi???m gi?? */}
                                    <input type="checkbox" name="ckecked" defaultChecked="checked" />
                                    <span className="checkmark" />
                                </div>
                            </label>
                            <label>
                                <p>H??nh th???c thanh to??n</p>
                                <div className="select">
                                    <div className="head">Chuy???n kho???n</div>
                                    <div className="sub">
                                        <a href="#">Chuy???n kho???n</a>
                                        <a href="#">Thanh to??n ti???n m???t</a>
                                    </div>
                                </div>
                            </label>
                            <label>
                                <p>?? ki???n c?? nh??n</p>
                                <input type="text" placeholder="Mong mu???n c?? nh??n v?? l???ch b???n c?? th??? h???c." />
                            </label>
                            {course.register && (
                                <h2 style={{ color: `${course.err ? "#00afab" : "red"}` }}>
                                    {course.register}
                                </h2>
                            )}
                            <div className="btn main rect" onClick={onSubmit}>????ng k??</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">????ng k?? th??nh c??ng</div>
                <p>
                    <strong>Ch??o m???ng Tr???n Ngh??a ???? tr??? th??nh th??nh vi??n m???i c???a CFD Team.</strong> <br>
                    C???m ??n b???n ???? ????ng k?? kh??a h???c t???i <strong>CFD</strong>, ch??ng t??i s??? ch??? ?????ng li??n l???c v???i b???n th??ng qua facebook
                    ho???c s??? ??i???n tho???i c???a b???n.
                </p>
            </div>
            <a href="/" class="btn main rect">v??? trang ch???</a>
        </div> */}
        </main>
    )
}