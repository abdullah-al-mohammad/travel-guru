import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react'
import { GoogleAuthProvider } from 'firebase/auth';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
import facebook from '../../assets/icons/fb.png'
import google from '../../assets/icons/google.png'




const Register = () => {
    
    const { createUser, signInWithGoogle, user } = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    
    const navigate = useNavigate()
    
    const handleSignUp = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const firstName = form.get('firstName')
        const lastName = form.get('lastName')
        const email = form.get('email')
        const password = form.get('password')
        console.log(firstName, lastName, email, password);
        
        // create user account function
        createUser(email, password)
        .then((result => {
                const user = result.user
                console.log(user);
                
            }))
            .catch((error => {
                console.error(error);
                
            }))
            
        }
        
        
        const handleGoogleSignUp = () => {
            // google signUp
            signInWithGoogle()
            .then((result => {
                const user = result.user
                console.log(user);
                navigate(user ? '/' : 'user not login' )

            }))
            .catch((error => {
                console.error(error);

            }))
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="First Name" name='firstName' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Last Name" name='lastName' className="input input-bordered" required />
                        </div>
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
                            <input type="password" placeholder="Confirm Password" name='password' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Create an account</button>
                        </div>
                        <p>Already have an account? <Link className='text-orange-400' to='/login'>Login</Link></p>
                    </form>
                    <div>
                        <div className="form-control mt-6 space-y-3">
                            <button className="btn rounded-full border border-black"> <img className='w-6' src={facebook} alt="" /> Continue With Facebook</button>
                            <button onClick={handleGoogleSignUp} className="btn rounded-full border border-black"> <img className='w-6' src={google} alt="" /> Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;