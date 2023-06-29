import React from 'react';
import { useState } from 'react';
import '../style/css/all.min.css';
import axios from 'axios';

function Login() {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    function demo(e) {
        e.preventDefault()
        axios.post('http://localhost/dashboard/login.php', {
            email: email,
            password: password
        })
            .then(function (response) {
                // handle success
                console.log(response);

                if(email == '')
                {
                    alert('enter email')
                }
                else if(password == '')
                {
                    alert('enter password')
                }
                else
                {
                    if((email == response.data.email) && (password == response.data.password))
                    {
                        // alert()
                            window.location.href = '/dash'
                            window.localStorage.setItem('uid' , response.data.id)

                    }
                    else
                    {
                            alert('check your email or password')
                            // window.location.reload()
                    }
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    return (
        <center>
            <div>
                <div class="login-box">
                    <div class="login-logo">
                        <a href="../../index2.html"><b>Admin</b>LTE</a>
                    </div>

                    <div class="card">
                        <div class="card-body login-card-body">
                            <p class="login-box-msg">Sign in to start your session</p>

                            <form method="post" onSubmit={demo}>
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control" name='email' placeholder="Email" onChange={(i) => setemail(i.target.value)}></input>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <input type="password" class="form-control" name='password' placeholder="Password" onChange={(i) => setpassword(i.target.value)}></input>
                                    <div class="input-group-append">
                                        <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-8">
                                        <div class="icheck-primary">
                                            <input type="checkbox" id="remember"></input>
                                            <label for="remember">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                                    </div>

                                </div>
                            </form>

                            <div class="social-auth-links text-center mb-3">
                                <p>- OR -</p>
                                <a href="#" class="btn btn-block btn-primary">
                                    <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                                </a>
                                <a href="#" class="btn btn-block btn-danger">
                                    <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                                </a>
                            </div>


                            <p class="mb-1">
                                <a href="forgot-password.html">I forgot my password</a>
                            </p>
                            <p class="mb-0">
                                {/* <a href="/register" class="text-center">Register a new membership</a> */}
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </center>
    );
}

export default Login;