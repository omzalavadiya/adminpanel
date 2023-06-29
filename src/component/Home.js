import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import audio from '../Audio/mixkit-happy-bell-alert-601.wav'

function Home() {
    const [blog, setblog] = useState([])
    const [liked, setlike] = useState([])
    const play = new Audio(audio)
    useEffect(() => {
        axios.get('http://localhost/dashboard/view.php')
            .then(function (res) {
                console.log(res)
                setblog(res.data.va)
                // console.log(res.data.va.title);

            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    // view like
    useEffect(() => {
        axios.get('http://localhost/dashboard/like-view.php')
            .then(function (res) {
                console.log(res)
                setlike(res.data.phpresult)
                // console.log(res.data.va.title);

            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    function like(i) {
        play.play()
        document.getElementById(`heart-${i}`).style.color='blue'
        axios.post('http://localhost/dashboard/like.php', {
            'u_id': i
        })
            .then(function (res) {
                console.log(res);

                window.location.reload()

            })
            .catch(function (error) {
                console.log(error);
            })
        // alert(i)
    }

    return (
        <>
            <header>
                <Container>
                    <Row className='d-flex justify-content-between align-items-center'>
                        <Col className='col-auto'>
                            <div className='logo'>
                                <img src="https://inspireflix.com/wp-content/uploads/2021/04/cropped-INSPIREFLIX-Globe-50x50.png" className='img-fluid rounded-5 p-2' alt="" />
                            </div>
                        </Col>
                        <Col className='col-auto'>
                            <ul className='main_menu d-flex'>
                                <li><a href="#">home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </header>
            <div className="container">
                <Row className='mt-5'>
                    {
                        blog.map((i) => {
                            if (i.status === "1") {
                                return (
                                    <>
                                        <Col className='col-6 g-3'>
                                            <div className='blog-title p-2'>
                                                <h6>{i.title}</h6>
                                            </div>
                                            <div className='blog-body d-flex'>
                                                <Col className='col-6 p-0 '>
                                                    <div className='blog-img'>
                                                        <img src={`http://localhost/dashboard/image/${i.image}`} alt="" srcset="" />
                                                    </div>
                                                </Col>
                                                <Col className='col-6'>
                                                    <div className="blog-description p-2 m-3">
                                                        <p className='blog-des'>{i.description}</p>
                                                    </div>
                                                    <div className='d-flex justify-content-between ms-3 me-3'>
                                                        <div>
                                                            <button  className='bg-danger ps-1 pe-1 rounded-3 border fs-5' onClick={() => { like(i.id) }}>
                                                                <i class="fa-regular fa-heart" id={`heart-${i.id}`}></i>
                                                            </button>
                                                            {
                                                            liked.map((q)=>{
                                                                if(i.id == q.user_id )
                                                                {
                                                                    return(
                                                                        <>
                                                                        <p>Likes{q.userlike}</p>
                                                                        </>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                        </div>
                                                        <div>
                                                            <button className='read-button'><a href={`/singleblog/${i.id}`}>Read</a></button>
                                                        </div>
                                                    </div>

                                                </Col>

                                            </div>
                                        </Col>
                                    </>
                                )
                            }
                        })
                    }
                </Row>
            </div>

        </>
    );
}

export default Home;