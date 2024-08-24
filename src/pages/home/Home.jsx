import Navbar from "../navbar/Navbar";
import './Home.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import sajek from '../../assets/Sajek.png'
import sreemongol from '../../assets/Sreemongol.png'
import sundorbon from '../../assets/sundorbon.png'


const Home = () => {
    return (
        <div className="bgImg">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="text-white">
                        <h1 className="text-6xl font-bebasNeue">Cox's bazar</h1>
                        <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                    </div>
                    <div>
                        <OwlCarousel className='owl-theme' loop margin={10} nav>
                            {/* {
                                $('.owl-carousel').owlCarousel({
                                    stagePadding: 50,
                                    loop: true,
                                    margin: 10,
                                    nav: true,
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
                            } */}
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
                            <div className='item'>
                                <img className="relative" src={sundorbon} alt="" />
                                <h1 className="text-3xl absolute left-3 bottom-7">Sundorbon</h1>
                            </div>
                            {/* <div class='item'>
                                <h4>12</h4>
                            </div> */}
                        </OwlCarousel>;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;