import { useState } from 'react'

export const useLogin = () =>{
    const [ values, setValues ] = useState({
        email: '',
        password: ''
    })

    const [ errors, setErrors ] = useState({})

    const handleChange = e =>{
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(values)
    }

    return { handleChange, values, handleSubmit }
}
