import { Container } from 'react-bootstrap';
import { PatientForm } from '../Components/ComponentIndex';
import { PatientNavLogin } from '../Components/PatientNavlogin'

export const UpdatePatient = () =>{
    return(
        <Container>
            <PatientNavLogin />
            <h1>Update personal profile</h1>
            <PatientForm />
        </Container>
    )
}