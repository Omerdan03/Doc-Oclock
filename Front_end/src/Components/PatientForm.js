import { Container, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

export const PatientForm = () => {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        scholarship: '',
        neighbourhood: '',
        firstVisit: '',
        handicapped: '',
        diabetic: '',
        hypertension:'',
        alcoholic: '',
        status: '',
        symptoms: '',
    })

    const handleChange = e =>{
        const { name, value } = e.target;
    
        setInput(prevInput => {
          return{
          ...prevInput,
          [name]: value
          }
        })
      }
      const handleSubmit= e =>{
        e.preventDefault();
        console.log(input)
        axios.put('http://localhost:5000', input)
      }  
    return (
        <Container className='patient-form'>
            <Form action='#' onSubmit={handleSubmit} encType='multipart/form-data'>
                <Form.Group>
                    <Form.Label>First name</Form.Label>
                    <Form.Control name='firstName' type="text" value={input.firstName} onChange={handleChange} placeholder="Enter first name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control name='lastName' type="text" value={input.lastName} onChange={handleChange} placeholder="Enter last name" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Primary email</Form.Label>
                    <Form.Control name='email' type="email" value={input.email} onChange={handleChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" value={input.password} onChange={handleChange} placeholder="Enter new password" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control name='age' type="number" placeholder="Enter age" value={input.age} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select gender</Form.Label>
                    <Form.Control name='gender' value={input.gender} onChange={handleChange} as="select">
                        <option>Male</option>
                        <option>Female</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Did you graduate high school?</Form.Label>
                    <Form.Control name='scholarship' value={input.scholarship} onChange={handleChange} as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Select neighborhood</Form.Label>
                    <Form.Control name='neighbourhood' value={input.neighbourhood} onChange={handleChange} as="select">
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
                    <Form.Label>Is this your first visit to the doctor?</Form.Label>
                    <Form.Control name='firstVisit' value={input.firstVisit} onChange={handleChange} as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Do you have any physical disabilities?</Form.Label>
                    <Form.Control name='handicapped' value={input.handicapped} onChange={handleChange} as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Are you diabetic?</Form.Label>
                    <Form.Control name='diabetic' value={input.diabetic} onChange={handleChange} as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Have you ever been diagnosed with hypertension (high blood pressure)?</Form.Label>
                    <Form.Control name='hypertension' value={input.hypertension} onChange={handleChange} as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Do you consume more than 14 alcoholic drinks per week?</Form.Label>
                    <Form.Control name='alcoholic' value={input.alcoholic} onChange={handleChange} as="select">
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>What is your marital status?</Form.Label>
                    <Form.Control name='status' value={input.status} onChange={handleChange} as="select">
                        <option>Married</option>
                        <option>Single</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Please list any current symptoms</Form.Label>
                    <Form.Control name='symptoms' value={input.symptoms} onChange={handleChange} type="text" placeholder="Enter last name" />
                </Form.Group>
                <Form.Group>
                    <Button variant='primary' type='submit'>Update profile</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}