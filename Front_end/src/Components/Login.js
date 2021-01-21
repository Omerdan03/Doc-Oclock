import { Form, Button } from 'react-bootstrap'
import { useLogin } from '../Hooks/useLogin'
import axios from './axios'
import { useHistory } from 'react-router-dom'

export const Login = () => {
    const {handleChange, values, handleSubmit} = useLogin();
  console.log(handleSubmit)

  const logIn = async (event) => {
    event.preventDefault()
    const response = await axios.post("/user/login", values)
    if (response.status === 200) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
    }
    if (localStorage.getItem('role') === "basic") {
      history.push('/home-login')
    } else {
      history.push('/adm')
    }
    const reload = window.location.reload()
  }

    return (
        <Form onSubmit={handleSubmit} className='loginForm' action="#" encType="multipart/form-data">
                <Form.Group>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form.Group>
              </Form>
    )
}