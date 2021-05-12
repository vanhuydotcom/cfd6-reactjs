import { useState } from 'react'

export default function useFormValidate(initialform, validate) {
    let [form, setForm] = useState(initialform)
    let [error, setError] = useState({})
    function inputChange(e) {
        let name = e.target.name
        let value = e.target.value
        setForm({
            ...form,
            [name]: value
        })
    }
    function check() {
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
        if (form.website.trim() && !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.website)) {
            errorObject.website = 'Please enter a valid website.'
        }
        if (!form.title.trim()) {
            errorObject.title = 'Please enter your title.'
        }
        if (Object.keys(errorObject).length === 0) {
            console.log(form);
        }
        // 
        setError(errorObject)
        return errorObject
    }
    return (
        form,
        error,
        inputChange,
        check
    )
}