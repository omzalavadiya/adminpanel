import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row , Col , Button , Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';

function Comment_edit() {

    const {id} = useParams();
    const u_id = `${id}`;
    const [name , setname] = useState('');
    const [comment , setcomment] = useState('');

    useEffect(()=> {
        axios.post('http://localhost/dashboard/comment-edit.php',{
            com_id: u_id
        })
         .then(function(res){
            setname(res.data.name)
            setcomment(res.data.comment)
         })
         .catch(function (error){
            console.log(error)
         })

    },[])
    return (
        <div>
            <Container>
            <Row className="mt-4 bg-info">
                <Col className="col-4 border-1 rounded-4 p-3">
            <Form className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name"  name="name" onChange={(i)=> setname(i.target.value)} placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control type="text" name="comment" onChange={(i)=> setcomment(i.target.value)} placeholder="comment" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
            </Row>
            </Container>
        </div>
    );
}

export default Comment_edit;