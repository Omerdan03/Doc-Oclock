import { Navbar, Nav } from 'react-bootstrap'

export const PatientNav = () =>{
    return(
        <Navbar className='mr-auto justify-content-center patient-nav' bg="light">
            <Navbar.Brand href='/'>Doc-o-clock</Navbar.Brand>
            <Nav.Link href="/patienthome">Home</Nav.Link>
            <Nav.Link href="/updatepatient">Update profile</Nav.Link>
        </Navbar>
    )
}