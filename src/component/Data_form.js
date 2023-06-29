import axios from 'axios';
import React, { useRef, useState } from 'react';
import Sidebar from './Sidebar';

function Data_form() {

    const [title , settitle]= useState();
    const [des , setdes]= useState();
    const [status , setstatus]= useState();
    const image=useRef()

    // const [blog,setblog]=useState({title:'',des:'',status:''})

    function demo (e) {
       e.preventDefault()
       const blogdata = new FormData()
       blogdata.append('title',title)
       blogdata.append('des',des)
       blogdata.append('status',status)
       blogdata.append('image',image.current.files[0])

        axios.post('http://localhost/dashboard/blog.php',blogdata )
        .then(function(res){
            console.log(res)
        })
        .catch(function(error){
            console.log(error)
        })
        window.location.reload()
    }
    // function demo1 (i){
    //     let name,val
    //     name=i.target.name
    //     val=i.target.value

    //     setblog({...blog,[name]:val})
    // }

    return (
      <>
      <div className='hold-transition sidebar-mini'>
          <Sidebar/>
          <div className="wrapper">
              <div className="content-wrapper">
                  {/* Content Header (Page header) */}
                  <section className="content-header">
                      <div className="container-fluid">
                          <div className="row mb-2">
                              <div className="col-sm-6">
                                  <h1>Blog Add</h1>
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
                                      <form method='post' onSubmit={demo} encType='multipath/form-data'>
                                          <div className="card-body">
                                              <div className="form-group">
                                                  <label htmlFor="exampleInputEmail1">Blog Title</label>
                                                  <input type="text" className="form-control" name='title' onChange={(e) => settitle(e.target.value)} id="exampleInputEmail1" placeholder="Enter title" />
                                              </div>
                                              <div className="form-group">
                                                  <label htmlFor="exampleInputPassword1">Blog Description</label>
                                                  <input type="text" className="form-control" name='des' onChange={(e) => setdes(e.target.value)} id="exampleInputPassword1" placeholder="Description" />
                                              </div>
                                              <div className="form-group">
                                                  <label htmlFor="exampleInputPassword1">Blog Status</label>
                                                  <input type="text" className="form-control" name='status' onChange={(e) => setstatus(e.target.value)} id="exampleInputPassword1" placeholder="status" />
                                              </div>
                                              <div className="form-group">
                                                  <label htmlFor="exampleInputFile">Blog image</label>
                                                  <div className="input-group">
                                                      <div className="custom-file">
                                                          <input type="file" ref={image} className="custom-file-input" id="exampleInputFile" />
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

export default Data_form;