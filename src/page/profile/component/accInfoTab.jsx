import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../hook/useFormValidate';
import { saveInfoAction } from '../../../redux/action/authAction';
import Auth from '../../../service/auth'
export default function AccInfoTab() {
    let { login } = useSelector(store => store.auth)
    let dispatch = useDispatch()
    let [saveInfo, setSaveInfo] = useState()
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
            }

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
            let res = await Auth.saveInfo({
                name: form.name,
                phone: form.phone,
                email: form.email,
                fb: form.fb
            })
            if (res.data) {
                dispatch(saveInfoAction(res.data))
            } else if (res.error) {
                setSaveInfo(res.error)
            }
        }
    }
    return (
        <div className="tab1" >
            <label>
                <p>Họ và tên<span>*</span></p>
                <input value={form.name} name="name" onChange={inputChange} type="text" placeholder="Nguyễn Văn A" />
                {
                    error.name && <p className="error_text">{error.name}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input value={form.phone} name="phone" onChange={inputChange} type="text" placeholder="0949******" />
                {
                    error.phone && <p className="error_text">{error.phone}</p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input disabled value={login.email} name="email" onChange={inputChange} type="text" placeholder="Dvhuy.dev@gmail.com" />
                {
                    error.email && <p className="error_text">{error.email}</p>
                }
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input value={form.fb} name="fb" onChange={inputChange} type="text" placeholder="Facebook url" />
                {
                    error.fb && <p className="error_text">{error.fb}</p>
                }

            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input value={form.skype} name="skype" onChange={inputChange} type="text" placeholder="Skype url" />
                {
                    error.skype && <p className="error_text">{error.skype}</p>
                }
            </label>
            <div className="btn main rect" onClick={onSubmit}>LƯU LẠI</div>
        </div>
    )
}