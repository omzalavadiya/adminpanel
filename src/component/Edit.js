import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import Sidebar from './Sidebar';

function Edit() {
    const { id } = useParams();
    const u_id = `${id}`;
    const [title, settitle] = useState('')
    const [des, setdes] = useState('')
    const [status, setstatus] = useState('')
    const [imgname, setimgname] = useState('')
    useEffect(() => {
        axios.post('http://localhost/dashboard/edit.php', {
            edit_id: u_id
        })
            .then(function (res) {
                console.log(res)    
                settitle(res.data.title)
                setdes(res.data.description)
                setstatus(res.data.status)
                setimgname(res.data.image)
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])
    const image = useRef()

    function submit(e) {
        e.preventDefault()
        if (image.current.files[0] == undefined) {
            // alert('yes')
            const data = new FormData()
            data.append('image', imgname)
            data.append('title', title)
            data.append('des', des)
            data.append('status', status)
            data.append('edit_id', u_id)

            axios.post('http://localhost/dashboard/blog.php',
                data)
                .then(function (response) {
                    console.log(response);
                    // window.location.href = '/'
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        else {
            // alert('no')
            const data = new FormData()
            data.append('image', image.current.files[0])
            data.append('title', title)
            data.append('des', des)
            data.append('status', status)
            data.append('edit_id', u_id)
            axios.post('http://localhost/dashboard/blog.php',
                data)
                .then(function (response) {
                    console.log(response);

                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }

    return (
        <>
            <div className='hold-transition sidebar-mini'>
                <Sidebar />
                <div className="wrapper">
                    <div className="content-wrapper">
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>Blog update</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">General Form</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    {/* left column */}
                                    <div className="col-md-6">
                                        {/* general form elements */}
                                        <div className="card card-info">
                                            <div className="card-header">
                                                <h3 className="card-title">Blog</h3>
                                            </div>
                                            {/* /.card-header */}
                                            {/* form start */}
                                            <form method='post' onSubmit={submit} encType='multipart/form-data'>
                                                <div className="card-body">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Blog Title</label>
                                                        <input type="text" className="form-control" value={title} onChange={(i) => settitle(i.target.value)} name='title' id="exampleInputEmail1" placeholder="Enter title" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Blog desription</label>
                                                        <input type="text" className="form-control" value={des} name='des' id="exampleInputPassword1" onChange={(i) => setdes(i.target.value)} placeholder="desription" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Blog Status</label>
                                                        <input type="number" min={0} max={1} className="form-control" value={status} name='status' id="exampleInputPassword1" placeholder="status" onChange={(i) => setstatus(i.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputFile">Blog image</label>
                                                        <div className="input-group">
                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input" ref={image} id="exampleInputFile" />
                                                                <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                            </div>
                                                            <div className="input-group-append">
                                                                <span className="input-group-text">Upload</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                    </div>
                                                </div>
                                                {/* /.card-body */}
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* /.card */}

                                    </div>
                                </div>
                                {/* /.row */}
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* /.content */}
                    </div>
                </div>
            </div>
        </>
    );
}


export default Edit;