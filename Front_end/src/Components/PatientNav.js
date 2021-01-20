import { Navbar, Nav } from 'react-bootstrap'

export const PatientNav = () =>{
    return(
        <Navbar className='mr-auto justify-content-center patient-nav' bg="light">
            <Navbar.Brand href="#">Doc-o-clock</Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
        </Navbar>
    )
}