import React from 'react';
import Navbar from '../navbar/Navbar';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Booking = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndtDate] = useState(new Date(12));
    // <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} />
    // const Example = () => {
    //     return (
    //         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    //     );
    // };

    return (
        <div className='bgImg h-screen'>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <div className='grid grid-cols-1 md:grid-cols-4 md:gap-x-16'>
                    <div className='col-span-2'>
                        <div className="text-white space-y-6">
                            <h1 className="text-6xl font-bebasNeue">Cox's bazar</h1>
                            <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
                        </div>
                    </div>
                    <div>
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="card bg-white w-full max-w-md shrink-0 shadow-2xl">
                                    <form className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Origin</span>
                                            </label>
                                            <select className="select select-bordered">
                                                <option disabled selected>Dhaka</option>
                                                <option>Dhaka</option>
                                                <option>cox bazar</option>
                                                <option>Rangamati</option>
                                                <option>sylhet</option>
                                            </select>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Destination</span>
                                            </label>
                                            <select className="select select-bordered">
                                                <option disabled selected>Cox’s Bazar</option>
                                                <option>Dhaka</option>
                                                <option>cox bazar</option>
                                                <option>Rangamati</option>
                                                <option>sylhet</option>
                                            </select>
                                        </div>
                                        <div className='lg:flex justify-between gap-3'>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">From</span>
                                                </label>
                                                <DatePicker className='py-3 rounded-md' selected={endDate} onChange={(date) => setEndtDate(date)} />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">To</span>
                                                </label>
                                                <DatePicker className='py-3 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
                                            </div>
                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Booking</button>
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

export default Booking;