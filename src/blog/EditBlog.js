import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'https://backend-node-app.onrender.com/'
// const URI = 'http://localhost:8000/'

const CompEditBlog = () => {
    const [title, setTitle] = useState('')    
    const [content, setContent] = useState('')    
    const [categoria, setCategoria] = useState('') 
    const {id} = useParams()
    const navigate = useNavigate()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${URI}${id}`, { title: title, content: content, categoria: categoria })
        navigate('/')
    }
    
    useEffect( ()=>{
        getBlogById()
    },[])

    const getBlogById = async () => {
        const res = await axios.get(`${URI}${id}`)
        setTitle(res.data.title)
        setContent(res.data.content)
        setCategoria(res.data.categoria)
    }

    return (
        <div>
        <h3 style={{color:"blue", marginTop:"25px"}}>Editar Blog #{id}</h3>
        <Container>
            <Row>
            <Col lg="3">
            </Col >
            <Col lg="6">
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className="form-control"       
                    required                 
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Contenido</label>
                <textarea
                    value={content}
                    onChange={ (e)=> setContent(e.target.value)}
                    type="text"
                    className="form-control"
                    required
                />
            </div>     
            <div className="mb-3">
                <label  className="form-label">Categoria</label>
                <textarea
                    value={categoria}
                    onChange={ (e)=> setCategoria(e.target.value)}
                    type="text"
                    className="form-control"
                    required
                />
            </div>         
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
        </Col>
        <Col lg="3">
        </Col>
        </Row>
        </Container>
    </div>
    )

}

export default CompEditBlog