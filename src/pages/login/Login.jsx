import React from 'react';
import { useContext, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { user, loginUser } = useContext(AuthContext)
    const [error, setLoginError] = useState()
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const handleUserLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password);


        if (password.length < 6) {
            setLoginError('your password should be 6 cherecter')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setLoginError('your password should have at least one upperCase')
            return
        }


        loginUser(email, password)
            .then((result => {
                const user = result.user;
                console.log('User signed in', user);

                // navigate after login
                navigate(location?.state ? location.state : '/')

            }))
            .catch((error => {
                console.error(error);

            }))
    }
    return (
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
                            <input type="email" placeholder="Username or Email" name='email' className="input input-bordered" required />
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
                                <span className='absolute inset-y-0 top-4 right-2 right-0' onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <input type="checkbox" name='checkbox' />
                                <p className='ml-2'>Remember Me</p>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                        <p>Don't have an account? <Link className='text-orange-400' to='/signUp'>Create an account</Link></p>
                    </form>
                    <p className='p-2 text-red-500'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;