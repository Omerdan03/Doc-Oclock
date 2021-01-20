import { Navbar, Nav } from 'react-bootstrap'

export const DrNav = () =>{
    return(
        <Navbar className='mr-auto justify-content-center patient-nav' bg="light">
            <Navbar.Brand href='/'>Doc-o-clock</Navbar.Brand>
            <Nav.Link href="/drhome">Home</Nav.Link>
            <Nav.Link href="/updatedr">Update profile</Nav.Link>
        </Navbar>
    )
}