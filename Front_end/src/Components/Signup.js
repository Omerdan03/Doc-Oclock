import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useSignup } from '../Hooks/HooksIndex'
import { signupValidate } from '../Validation/validateIndex'

export const Signup = () => {

    const {handleChange, values, handleSubmit, errors} = useSignup(signupValidate);

    return (
        <Form onSubmit={handleSubmit} className='loginForm' action="#" encType="multipart/form-data">
            <Form.Group>
                <Form.Control
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={values.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <div>{errors.firstName}</div>}
            </Form.Group>
            <Form.Group>
                <Form.Control
                    name="lastName"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                />
                {errors.lastName && <div>{errors.lastName}</div>}
            </Form.Group>
            <Form.Group>
                <Form.Control
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                />
                {errors.email && <div>{errors.email}</div>}
            </Form.Group>
            <Form.Group>
                <Form.Control
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                />
                {errors.password && <div>{errors.password}</div>}
            </Form.Group>
            <Form.Group>
                <Form.Control
                    name="confirmPassword"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                />
                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit">
                    Sign up
                  </Button>
            </Form.Group>
        </Form>
    )
}