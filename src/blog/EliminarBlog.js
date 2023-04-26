import axios from "axios";
import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Alert, Button, Form, Row } from 'react-bootstrap';


const URI = 'https://backend-node-app.onrender.com/'
// const URI = 'http://localhost:8000/'


function CompEliminarBlog() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [alerta, setAlerta] = useState(false);
  const [alerta2, setAlerta2] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    // console.log(id);
    setDisabled(true);

    try {
      // console.log('Cargando datos...');
      const response = await axios.delete(`${URI}${id}`)
      if (response.status === 204) {
        setAlerta(true);
      }
      if (response.status !== 204) {
        setAlerta2(true);
      }
    } catch (err) {
      setDisabled(false);
      if (err.status !== 204) {
        setAlerta(false);
        setAlerta2(true);
      }
      console.log('catch');
      console.log('Error al cargar los datos')
    }
  }

  const submitVolver = async (e) => {
    e.preventDefault();
    // console.log(id);
    navigate('/')
  }

  return (
    <>
    {(alerta2 === true) ?
      <Container style={{ overflow: "auto" }} className="mb-3 mt-4">
        <Form onSubmit={submitVolver}>
          <Row className='justify-content-center text-center'>
            <Alert variant="dark text-center w-100 h-50 text-ligh">
              <p className='mb-0'><small>¡El blog no pudo ser eliminado, intente mas tarde!</small></p>
            </Alert>
            <Button variant="primary" type='submit'>
              Volver
            </Button>
          </Row>
        </Form>
      </Container>
      :
      <>
        {(alerta === false) ?
          <Container style={{ overflow: "auto" }} className="mb-3 mt-4">
            <Form onSubmit={submit}>
              <Row className='justify-content-center text-center'>
                <Alert variant="danger text-center w-100 h-50 text-ligh d-mobile">
                  <p className='mb-0'><small>¿Estás seguro que deseas eliminar el Blog <br /> #{id}?</small></p>
                </Alert>
                <Button variant="primary" type='submit' disabled={disabled}>
                  {(disabled === false) ? "Aceptar" : "Borrando"}&nbsp;&nbsp;
                </Button>
              </Row>
            </Form>
          </Container>
          :
          <Container style={{ overflow: "auto" }} className="mb-3 mt-4">
            <Form onSubmit={submitVolver}>
              <Row className='justify-content-center text-center'>
                <Alert variant="success text-center w-100 h-50 text-ligh">
                  <p className='mb-0'><small>¡Blog eliminado correctamente!</small></p>
                </Alert>
                <Button variant="primary" type='submit'>
                  Volver
                </Button>
              </Row>
            </Form>
          </Container>
        }
      </>
    }
  </>
  )
}

export default CompEliminarBlog