import { Form, Button } from 'react-bootstrap'
import { useLogin } from '../Hooks/useLogin'

export const Login = () => {
    const {handleChange, values, handleSubmit} = useLogin();

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