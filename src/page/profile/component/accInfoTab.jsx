import React, { useRef, useState } from 'react'
export default function AccInfoTab() {

    let [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        facebook: '',
        skype: '',

    })
    let [error, setError] = useState({
        name: '',
        phone: '',
        email: '',
        facebook: '',
        skype: '',
    })
    function onSubmit() {
        let errorObject = {}
        if (!form.name.trim()) {
            errorObject.name = 'Please enter your name.'
        }
        if (!form.phone.trim()) {
            errorObject.phone = 'Please enter your phone.'

        } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
            errorObject.phone = 'Please enter a valid phone'
        }
        if (!form.email.trim()) {
            errorObject.email = 'Please enter your email.'
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email)) {
            errorObject.email = 'Please enter a valid email address'
        }
        if (form.facebook.trim() && !/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/.test(form.facebook)) {
            errorObject.facebook = 'Please enter a valid facebook.'
        }
        if (form.skype.trim() && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.skype)) {
            errorObject.skype = 'Please enter a valid skype.'
        }
        if (Object.keys(errorObject).length === 0) {
            console.log(form);
        }
        else {
            setError(errorObject)
        }
    }
    function inputOnChange(e) {
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [name]: value
        })

    }
    return (
        <div className="tab1" >
            <label>
                <p>Họ và tên<span>*</span></p>
                <input value={form.name} name="name" onChange={inputOnChange} type="text" placeholder="Nguyễn Văn A" />
                {
                    error.name && <p className="error_text">{error.name}</p>
                }
            </label>
            <label>
                <p>Số điện thoại<span>*</span></p>
                <input value={form.phone} name="phone" onChange={inputOnChange} type="text" placeholder="0949******" />
                {
                    error.phone && <p className="error_text">{error.phone}</p>
                }
            </label>
            <label>
                <p>Email<span>*</span></p>
                <input value={form.email} name="email" onChange={inputOnChange} type="text" placeholder="Dvhuy.dev@gmail.com" />
                {
                    error.email && <p className="error_text">{error.email}</p>
                }
            </label>
            <label>
                <p>Facebook<span>*</span></p>
                <input value={form.facebook} name="facebook" onChange={inputOnChange} type="text" placeholder="Facebook url" />
                {
                    error.facebook && <p className="error_text">{error.facebook}</p>
                }

            </label>
            <label>
                <p>Skype<span>*</span></p>
                <input value={form.skype} name="skype" onChange={inputOnChange} type="text" placeholder="Skype url" />
                {
                    error.skype && <p className="error_text">{error.skype}</p>
                }
            </label>
            <div className="btn main rect" onClick={onSubmit}>LƯU LẠI</div>
        </div>
    )
}