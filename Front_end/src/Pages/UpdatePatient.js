import { Container } from 'react-bootstrap';
import { PatientForm, PatientAndDocNav } from '../Components/ComponentIndex';

export const UpdatePatient = () =>{
    return(
        <Container>
            <PatientAndDocNav />
            <h1>Update personal profile</h1>
            <PatientForm />
        </Container>
    )
}