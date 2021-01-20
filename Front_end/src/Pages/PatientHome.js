import { Container } from 'react-bootstrap'
import { PatientNav } from '../Components/ComponentIndex'

export const PatientHome = () => {
    return (
        <Container>
            <PatientNav />
            <h1>Patient Home</h1>
        </Container>
    )
}