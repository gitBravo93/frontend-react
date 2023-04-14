import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'https://backend-node-app.onrender.com'
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
        <h3 style={{color:"blue"}}>Editar Blog</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label" style={{color:"blue"}}>Titulo</label>
                <input
                    value={title}
                    onChange={ (e)=> setTitle(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            <div className="mb-3">
                <label  className="form-label" style={{color:"blue"}}>Contenido</label>
                <textarea
                    value={content}
                    onChange={ (e)=> setContent(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>     
            <div className="mb-3">
                <label  className="form-label" style={{color:"blue"}}>Categoria</label>
                <textarea
                    value={categoria}
                    onChange={ (e)=> setCategoria(e.target.value)}
                    type="text"
                    className="form-control"
                />
            </div>         
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    </div>
    )

}

export default CompEditBlog