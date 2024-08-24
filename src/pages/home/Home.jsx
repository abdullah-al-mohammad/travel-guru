import Navbar from "../navbar/Navbar";
import './Home.css'


const Home = () => {
    return (
        <div className="bgImg">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                    <div className="">
                        <h1 className="text-6xl font-bebasNeue">Cox's bazar</h1>
                        <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    </div>
                    <div>
                        <div className="min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" placeholder="password" className="input input-bordered" required />
                                            <label className="label">
                                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                            </label>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;