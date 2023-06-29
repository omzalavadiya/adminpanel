import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Comment_table() {

  const [user, setuser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/dashboard/comment-edit.php')
      .then(function (res) {
        console.log(res)
        setuser(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  function checkComment(i, j) {
    // alert(i + j)
    if (j == true) {
      window.localStorage.setItem('comment_id', i)
    }
    else if (j === false) {
      window.localStorage.removeItem('comment_id');

    }
  }

  return (
    <>

      {/* <Container>
            <h1>Comment Edit</h1>
            <Row>
                <Col>
                    <div className="mt-5">
                        <form action="">
                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>comment</td>
                                    <td>
                                        <input type="text" />
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </Col>
            </Row>
          </Container> */}


      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Comment</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        user.map((i) => {
                          return (
                            <>
                              <tr>
                                <td className='bg-info rounded-2'>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.comment}</td>
                                <td>{i.status}</td>
                                <td><a href="/comment_edit">Edit</a> </td>
                                <td>
                                  <input type="checkbox" name="" id="" onChange={(j) => checkComment(i.id, j.target.checked)} />
                                </td>
                              </tr>
                            </>
                          )
                        })
                      }
                    </tbody>

                  </table>
                </div>
                {/* /.card-body */}
              </div>

            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
    </>
  )
}

export default Comment_table