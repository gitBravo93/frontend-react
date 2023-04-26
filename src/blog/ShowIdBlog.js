import axios from "axios";
import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';

const URI = 'https://backend-node-app.onrender.com/'
// const URI = 'http://localhost:8000/'

const CompShowIdBlog = () => {
  const { id } = useParams()

  const [read, setRead] = useState("");
  const fetchGetBlogRead = useCallback(async () => {
    let data = null;

    try {

      // console.log('try');
      const response = await axios.get(`${URI}${id}`)
      // console.log(response);
      data = response.data;
      // console.log(data);

    } catch (err) {
      console.log('catch');
      console.log(err.response);
      data = [];
    } // 'catch'

    if (data !== null) {
      setRead(data);
    };

  }, []);  // fetchGetBlogRead()

  useEffect(() => {

    fetchGetBlogRead();

  }, [fetchGetBlogRead]);

  return (
    <Container>
      <Row className='mr-legth' >
        <h6><b>Título</b></h6>
      </Row>
      <Row className='mr-legth mb-3'>
        <div>
          <h6>{read.title}</h6>
        </div>
      </Row>
      <Row className='mr-legth'>
        <h6><b>Contenido</b></h6>
      </Row>
      <Row className='mr-legth mb-3' >
        <div>
          <h6>{read.content}</h6>
        </div>
      </Row>
      <Row className='mr-legth'>
        <h6><b>Categotía</b></h6>
      </Row>
      <Row className='mr-legth mb-3' >
        <div>
          <h6>{read.categoria}</h6>
        </div>
      </Row>
    </Container>

  )

}

export default CompShowIdBlog;