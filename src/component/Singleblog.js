import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'antd';



function Singleblog() {
    const { u_id } = useParams()
    const [blog, setblog] = useState([])

    const [name, setname] = useState();
    const [comment, setcomment] = useState();
    const [data, setdata] = useState([])
    var status = 0;

    function submit(e) {
        e.preventDefault()

        // useEffect(()=>{
        axios.post('http://localhost/dashboard/comment.php', {
            name: name,
            comment: comment,
            u_id: u_id,
            status: status
        })
            .then(function (res) {
                console.log(res)
                setcomment(res.data)
                // window.location.reload()
            })
            .catch(function (error) {
                console.log(error)
            })
        // },[])
    }
    useEffect(() => {
        axios.post('http://localhost/dashboard/comment-view.php', {
            c_id: u_id
        })


            .then(function (res) {
                setdata(res.data.va)
                // console.log(data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost/dashboard/view.php')
            .then(function (res) {
                // console.log(res)
                setblog(res.data.va)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])


    

    return (
        <div className='single-blog '>

            <div className="container">
                <div className="row mt-5">
                    {
                        blog.map((i) => {
                            if (i.id === u_id) {
                                return (
                                    <>
                                        <Col className='col-4'>
                                            <div className=''>
                                                <div className='p-2  single-title'>
                                                    <h6>{i.title}</h6>
                                                </div>

                                                <div className="single-blog-img">
                                                    <img src={`http://localhost/dashboard/image/${i.image}`} className="img-fluid" alt="" srcset="" />
                                                </div>
                                                <div className='p-2 single-des'>
                                                    <p>{i.description}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='col-auto'>
                                            <div className='m-3 '>
                                                <form method='post' onSubmit={submit}>
                                                    <table className=''>
                                                        <tr>
                                                            <td><i class="fa-solid fa-user pe-3"></i> username </td>
                                                            <td>
                                                                <input type="text" placeholder='Enter Name' name='name' onChange={(i) => setname(i.target.value)} />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td> <i class="fa-regular fa-comments pe-3"></i>Comment:</td>
                                                            <td><input type="text" placeholder='Enter Comment' name='comment' onChange={(i) => setcomment(i.target.value)} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            {/* <td><input type="button" value="save" className='ps-2 pe-2'  /><i class="fa-solid fa-inbox"></i></td> */}
                                                            <td><button className='read-button text-white' >submit</button></td>
                                                        </tr>
                                                    </table>
                                                </form>
                                            </div>
                                        </Col>
                                    </>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div className="comment">
                <Container>
                    <Row className='mt-3'>
                        {
                            data.map((i) => {
                                if (window.localStorage.getItem('comment_id') != i.id) {
                                    return (
                                        <>
                                            <Col className='col-2'>
                                                <Card className='bg-info' bordered={false}>
                                                    <p><i class="fa-solid fa-user pe-3"></i>{i.name}</p>
                                                </Card>
                                                <Card bordered={false}>
                                                    <div className='d-flex justify-content-between'>
                                                        <p><i class="fa-regular fa-comments pe-3"></i>{i.comment}</p>
                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                    </div>
                                                </Card>
                                            </Col>
                                        </>
                                    )
                                }
                            })
                        }
                    </Row>
                </Container>

            </div>
        </div>




    );
}

export default Singleblog;