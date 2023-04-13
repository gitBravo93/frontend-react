import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/'


const CompShowBlogs = () => {

	const [blogs, setBlog] = useState([])
	useEffect(() => {
		getBlogs()
	}, [])

	//procedimineto para mostrar todos los blogs
	const getBlogs = async () => {
		const res = await axios.get(URI)
		setBlog(res.data)
		console.log(res.data)
	}

	//procedimineto para eliminar un blog
	const deleteBlog = async (id) => {
		await axios.delete(`${URI}${id}`)
		getBlogs()
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col'>
					<Link to="/create" className='btn btn-success mt-2 mb-2'>Nuevo Blog</Link>
				</div>
				<div>
					<table className='table'>
						<thead className='table-primary'>
							<tr>
								<th>Titulo</th>
								<th>Contenido</th>
								<th>Categoria</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{(() => {
								if (blogs === null) {
									return (
										<>
											<tr>
												<td colSpan="9" className='text-center'>
													Consultando...
												</td>
											</tr>
										</>
									)
								} else if (blogs.length > 0) {
									return (
										<>
											{blogs.map((blog) => (
												<tr key={blog.id}>
													<td> {blog.title} </td>
													<td> {blog.content} </td>
													<td> {blog.categoria} </td>
													<td>
														<Link to={`/edit/${blog.id}`} className='btn btn-secondary'><i className="fas fa-edit"></i></Link>
														<button onClick={() => deleteBlog(blog.id)} className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
													</td>
												</tr>
											))}
										</>
									)
								} else {
									return (
										<>
											<tr>
												<td colSpan="9" className='text-center'>No hay datos disponibles...</td>
											</tr>
										</>
									)
								}
							})()}
						</tbody >
					</table>
				</div>
			</div>
		</div>
	)

}

export default CompShowBlogs