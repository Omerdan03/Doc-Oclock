import { Container, Form } from 'react-bootstrap'

export const DrForm = () => {
    return (
        <Container>
            <Form action='#' encType='multipart/form-data'>
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control name='first_name' type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control name='last_name' type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control name='first_name' type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Clinic/hopsital name</Form.Label>
                    <Form.Control name='clinic_name' type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Speciality</Form.Label>
                    <Form.Control name='first_name' type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select speciality</Form.Label>
                    <Form.Control name='neighbourhood' as="select">
                        <option>Allergy/immunology</option>
                        <option>Anesthesiology</option>
                        <option>Dermatology</option>
                        <option>Diagnostic radiology</option>
                        <option>Emergency medicine</option>
                        <option>Family medicine</option>
                        <option>Internal medicine</option>
                        <option>Medical genetics</option>
                        <option>Neurology</option>
                        <option>Nuclear medicine</option>
                        <option>Obstetrics and gynecology</option>
                        <option>Ophthalmology</option>
                        <option>Pathology</option>
                        <option>Pediatrics</option>
                        <option>Physical medicine and rehabilitation</option>
                        <option>Preventive medicine</option>
                        <option>Psychiatry</option>
                        <option>Radiation oncology</option>
                        <option>Surgery</option>
                        <option>Urology</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </Container>
    )
}