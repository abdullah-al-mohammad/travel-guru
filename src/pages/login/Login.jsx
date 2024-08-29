import React from 'react';
import { useContext, useState, useRef } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Navbar from '../navbar/Navbar';

const Login = () => {
    const { user, loginUser, emailPasswordReset } = useContext(AuthContext)
    // user success
    const [success, setSuccess] = useState()
    // error Handle
    const [loginError, setLoginError] = useState()
    // show password
    const [showPassword, setShowPassword] = useState(false)
    // navigate
    const location = useLocation()
    const navigate = useNavigate()

    // password reset by useRef
    const emailRef = useRef(null)

    const handleUserLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        const accepted = form.get('checkbox')
        console.log(email, password, accepted);


        if (password.length < 6) {
            setLoginError('your password should be 6 cherecter')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('your password should have at least one upperCase')
            return
        }
        else if (!accepted) {
            setLoginError('Remember me')
            return
        }

        // reset
        setLoginError('')
        setSuccess('')

        loginUser(email, password)
            .then((result => {
                const user = result.user;
                console.log('User signed in', user);
                if (user.emailVerified) {
                    setSuccess('login Successful')
                } else {
                    alert('please verify your email  address')
                    return
                }


                // navigate after login
                navigate(location?.state ? location.state : '/')

            }))
            .catch((error => {
                console.error(error);

            }))
    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value
        console.log('send email', emailRef.current.value);

        if (!email) {
            console.log('please provide email', email);
            return

        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            console.log('please write valid email');

        }

        // send validation email
        emailPasswordReset(email)
            .then(() => {
                alert('please check your email')
            })
            .catch((error) => {
                console.log(error);

            })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleUserLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Username or Email" name='email' ref={emailRef} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="password"
                                        name='password'
                                        className="input input-bordered w-full"
                                        required />
                                    <span className='absolute inset-y-0 top-4 right-2' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <input type="checkbox" name='checkbox' />
                                    <p className='ml-2'>Remember Me</p>
                                    <label className="label">
                                        <a onClick={handleForgotPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Login</button>
                            </div>
                            <p>Don't have an account? <Link className='text-orange-400' to='/signUp'>Create an account</Link></p>
                        </form>
                        {loginError && <p className='p-2 text-red-500'>{loginError}</p>}
                        <p className='p-2 text-red-500'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;