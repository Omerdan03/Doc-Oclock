import { Container, Form, Button } from 'react-bootstrap'

export const PatientForm = () => {
    return (
        <Container className='patient-form'>
            <Form action='#' encType='multipart/form-data'>
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control name='first_name' type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control name='last_name' type="text" placeholder="Enter last name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Primary email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Enter new password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control name='age' type="number" placeholder="Enter age" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select gender</Form.Label>
                    <Form.Control name='gender' as="select">
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Did you graduate high school?</Form.Label>
                    <Form.Control name='scholarship' as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select neighborhood</Form.Label>
                    <Form.Control name='neighbourhood' as="select">
                        <option>AEROPORTO</option>
                        <option>ANDORINHAS</option>
                        <option>ANTÔNIO HONÓRIO</option>
                        <option>ARIOVALDO FAVALESSA</option>
                        <option>BARRO VERMELHO</option>
                        <option>BELA VISTA</option>
                        <option>BENTO FERREIRA</option>
                        <option>BOA VISTA</option>
                        <option>BONFIM</option>
                        <option>CARATOÍRA</option>
                        <option>CENTRO</option>
                        <option>COMDUSA</option>
                        <option>CONQUISTA</option>
                        <option>CONSOLAÇÃO</option>
                        <option>CRUZAMENTO</option>
                        <option>DA PENHA</option>
                        <option>DE LOURDES</option>
                        <option>DO CABRAL</option>
                        <option>DO MOSCOSO</option>
                        <option>DO QUADRO</option>
                        <option>ENSEADA DO SUÁ</option>
                        <option>ESTRELINHA</option>
                        <option>FONTE GRANDE</option>
                        <option>FORTE SÃO JOÃO</option>
                        <option>FRADINHOS</option>
                        <option>GOIABEIRAS</option>
                        <option>GRANDE VITÓRIA</option>
                        <option>GURIGICA</option>
                        <option>HORTO</option>
                        <option>ILHA DAS CAIEIRAS</option>
                        <option>ILHA DE SANTA MARIA</option>
                        <option>ILHA DO BOI</option>
                        <option>ILHA DO FRADE</option>
                        <option>ILHA DO PRÍNCIPE</option>
                        <option>ILHAS OCEÂNICAS DE TRINDADE</option>
                        <option>INHANGUETÁ</option>
                        <option>ITARARÉ</option>
                        <option>JABOUR</option>
                        <option>JARDIM CAMBURI</option>
                        <option>JARDIM DA PENHA</option>
                        <option>JESUS DE NAZARETH</option>
                        <option>JOANA D´ARC</option>
                        <option>JUCUTUQUARA</option>
                        <option>MARIA ORTIZ</option>
                        <option>MARUÍPE</option>
                        <option>MATA DA PRAIA</option>
                        <option>MONTE BELO</option>
                        <option>MORADA DE CAMBURI</option>
                        <option>MÁRIO CYPRESTE</option>
                        <option>NAZARETH</option>
                        <option>NOVA PALESTINA</option>
                        <option>PARQUE INDUSTRIAL</option>
                        <option>PARQUE MOSCOSO</option>
                        <option>PIEDADE</option>
                        <option>PONTAL DE CAMBURI</option>
                        <option>PRAIA DO CANTO</option>
                        <option>PRAIA DO SUÁ</option>
                        <option>REDENÇÃO</option>
                        <option>REPÚBLICA</option>
                        <option>RESISTÊNCIA</option>
                        <option>ROMÃO</option>
                        <option>SANTA CECÍLIA</option>
                        <option>SANTA CLARA</option>
                        <option>SANTA HELENA</option>
                        <option>SANTA LUÍZA</option>
                        <option>SANTA LÚCIA</option>
                        <option>SANTA MARTHA</option>
                        <option>SANTA TEREZA</option>
                        <option>SANTO ANDRÉ</option>
                        <option>SANTO ANTÔNIO</option>
                        <option>SANTOS DUMONT</option>
                        <option>SANTOS REIS</option>
                        <option>SEGURANÇA DO LAR</option>
                        <option>SOLON BORGES</option>
                        <option>SÃO BENEDITO</option>
                        <option>SÃO CRISTÓVÃO</option>
                        <option>SÃO JOSÉ</option>
                        <option>SÃO PEDRO</option>
                        <option>TABUAZEIRO</option>
                        <option>UNIVERSITÁRIO</option>
                        <option>VILA RUBIM</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Do you have any physical disabilities?</Form.Label>
                    <Form.Control as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Are you diabetic?</Form.Label>
                    <Form.Control as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Have you ever been diagnosed with hypertension (high blood pressure)?</Form.Label>
                    <Form.Control name='scholarship' as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Do you consume more than 14 alcoholic drinks per week?</Form.Label>
                    <Form.Control as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Button variant='primary'>Update profile</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}