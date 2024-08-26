import Navbar from "../navbar/Navbar";
import './Home.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sajek from '../../assets/Sajek.png'
import sreemongol from '../../assets/Sreemongol.png'
import sundorbon from '../../assets/sundorbon.png'
import { FaArrowRight } from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";


const Home = () => {
    return (
        <div className="bgImg h-screen">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="text-white">
                        <h1 className="text-6xl font-bebasNeue mb-3">Cox's bazar</h1>
                        <p className="mb-3">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                        <Link to='/booking'>
                            <button className="btn btn-warning">
                                Booking
                                <FaArrowRight></FaArrowRight>
                            </button>
                        </Link>
                    </div>
                    <div>
                        <OwlCarousel className='owl-theme' loop margin={10} nav>
                            {
                                $('.owl-carousel').owlCarousel({
                                    stagePadding: 50,
                                    loop: true,
                                    margin: 10,
                                    nav: true,
                                    autoplay: true,
                                    autoplaySpeed: true,
                                    responsive: {
                                        0: {
                                            items: 1
                                        },
                                        600: {
                                            items: 3
                                        },
                                        1000: {
                                            items: 5
                                        }
                                    }
                                })
                            }
                            <div className='item'>
                                <img className="relative" src={sajek} alt="sajek" />
                                <div className="bg-gradient-to-b from-black">
                                    <h1 className="text-3xl absolute left-3 bottom-7">Sajek</h1>
                                </div>
                            </div>
                            <div className='item'>
                                <img className="relative" src={sreemongol} alt="" />
                                <h1 className="text-3xl absolute left-3 bottom-7">Sreemongol</h1>
                            </div>
                            <div class='item'>
                                <img className="relative" src={sundorbon} alt="" />
                                <h1 className="text-3xl absolute left-3 bottom-7">Sundorbon</h1>
                            </div>
                            <div class='item'>
                                <img className="relative" src={sundorbon} alt="" />
                                <h1 className="text-3xl absolute left-3 bottom-7">Sundorbon</h1>
                            </div>
                        </OwlCarousel>;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;