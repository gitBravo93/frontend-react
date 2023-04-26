import axios from "axios";
import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Button } from 'react-bootstrap';

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
      <Row>
      <Row className='mr-legth mt-4' >
        <h3 style={{ color: "blue" }}><b>Título</b></h3>
      </Row>
      <Row className='mr-legth mb-3'>
        <div>
          <h6>{read.title}</h6>
        </div>
      </Row>
      <Row className='mr-legth'>
        <h3 style={{ color: "blue" }}><b>Contenido</b></h3>
      </Row>
      <Row className='mr-legth mb-3' >
        <div>
          <h6>{read.content}</h6>
        </div>
      </Row>
      <Row className='mr-legth'>
        <h3 style={{ color: "blue" }}><b>Categotía</b></h3>
      </Row>
      <Row className='mr-legth mb-3' >
        <div>
          <h6>{read.categoria}</h6>
        </div>
      </Row>
      </Row>
    </Container>
  )

}

export default CompShowIdBlog;