import { Container } from 'react-bootstrap'

export const Home = () =>{
    return(
        <Container className='App'>
            <h1>Doc-o-clock</h1>
            <h2>I'm a</h2>
            <a href='/PatientLogin' className="btn btn-primary btn-lg">Patient</a>
            <a href='/DrLogin' className="btn btn-primary btn-lg">Doctor</a>
        </Container>
    )
}