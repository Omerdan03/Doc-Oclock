import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const useLogin = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post(
            "http://localhost:5000/api/login-patient",
            values
        );
        if (response.status === 200) {
            localStorage.setItem("UserToken", response.data.token);
            console.log("user is logged in")
                // useHistory().push("/patienthome")
        }
    }

    return { handleChange, values, handleSubmit }
}