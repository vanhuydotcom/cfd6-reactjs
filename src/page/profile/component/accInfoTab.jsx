import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import useFormValidate from '../../../hook/useFormValidate';
export default function AccInfoTab() {
    let { login } = useSelector(state => state.auth)
    console.log(login)

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
                pattern: 'website'
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
            facebook: {
                require: 'Enter your Url facebook',
                pattern: 'Url facebook is not valid'
            },


        }
    })

    function onSubmit() {
        let errorObject = check()
        if (Object.keys(errorObject).length === 0) {
            console.log(form);
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
                <input value={form.email} name="email" onChange={inputChange} type="text" placeholder="Dvhuy.dev@gmail.com" />
                {
                    error.email && <p className="error_text">{error.email}</p>
                }
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input value={form.fb} name="facebook" onChange={inputChange} type="text" placeholder="Facebook url" />
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