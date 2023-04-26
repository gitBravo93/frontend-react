import axios from 'axios'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const URI = 'https://backend-node-app.onrender.com/'
// const URI = 'http://localhost:8000/'

const CompCreateBlog = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [categoria, setCategoria] = useState('')
  const navigate = useNavigate()

  //procedimiento guardar
  const crear = async (e) => {
    e.preventDefault()
    await axios.post(URI, { title: title, content: content, categoria: categoria })
    navigate('/')
  }

  return (
    <div>
      <h3 style={{ color: "blue" }}>Crear un Blog</h3>
      <Container>
        <Row>
          <Col lg="3">
          </Col>
          <Col lg="6">
            <form onSubmit={crear}>
              <div className='mb-3'>
                <label className='form-label' style={{ color: "blue" }}>Titulo</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  className='form-control'
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='form-label' style={{ color: "blue" }}>Contenido</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  type="text"
                  className='form-control'
                  required
                />
              </div>
              <div className='mb-3'>
                <label className='form-label' style={{ color: "blue" }}>Categoria</label>
                <textarea
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  type="text"
                  className='form-control'
                  required
                />
              </div>
              <button type='submit' className='btn btn-primary'>Enviar</button>
            </form>
          </Col>
          <Col lg="3">
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CompCreateBlog