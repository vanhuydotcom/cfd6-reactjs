import { useState } from 'react'

export default function useFormValidate(initform, validate) {
    let [form, setForm] = useState(initform)
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

    }
    return (
        form,
        error,
        inputChange,
        check
    )
}