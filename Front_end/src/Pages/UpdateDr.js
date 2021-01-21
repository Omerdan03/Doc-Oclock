import { DrForm } from '../Components/ComponentIndex'
import { Container } from 'react-bootstrap'
import { DrLoginNav } from '../Components/DrLoginNav'
export const UpdateDr = () =>{
    return(
        <div>
            <DrLoginNav />
            <Container>
                <h1 className="mt-5">Update profile information</h1>
            <DrForm />
        </Container>
        </div>

    )
}