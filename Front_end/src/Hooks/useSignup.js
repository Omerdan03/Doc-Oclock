import { useState } from 'react'
import axios from 'axios'
export const useSignup = validate =>{
    const [ values, setValues ] = useState({
        fullName: '',
        email: '',
        password: '',
    })

    const [ errors, setErrors ] = useState({})

    const handleChange = e =>{
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            "http://localhost:5000/api/register-patient",
            values
        );
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('role', response.data.role);
            console.log("register complite")
        }
    }

    return { handleChange, values, handleSubmit, errors }
}
