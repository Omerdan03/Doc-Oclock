import { useState } from 'react'
import axios from 'axios'

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            "http://localhost:5000/api/login-patient",
            values
        );

        if (response.status === 200) {
            alert("Logged in succesfully")
            localStorage.setItem("UserToken", response.data.token);
            localStorage.setItem('role', response.data.role);
        }
    };


    return { handleChange, values, handleSubmit }
}
