import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Search = () => {
    const loadAllData = useLoaderData()
    console.log(loadAllData);

    const defaultProps = {
        center: {
            lat: 23.8611,
            lng: 90.0004
        },
        zoom: 15
    };

    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <p>252 stays Apr 13-17 3 guests</p>
            <h2 className='text-3xl mb-3'>Stay in Cox’s Bazar</h2>
            <div className='flex gap-16'>
                <div>
                    {
                        loadAllData.map(data => {
                            const { img, title, details, rate, price } = data
                            return <>
                                <div key={data.id}>
                                    <div className='flex items-center gap-7'>
                                        <div>
                                            <img className='mb-3' src={img} alt="" />
                                        </div>
                                        <div>
                                            <h2 className='mb-4'>{title}</h2>
                                            <p className='mb-4'>{details}</p>
                                            <span>{rate}</span>
                                            <span className='ml-3'>{`${price.perNight}`} <span className='text-slate-500'>{price.total}</span></span>
                                        </div>
                                    </div>
                                </div>


                            </>
                        })
                    }
                </div>
                <div style={{ height: '1000px', width: '500px' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                            lat={defaultProps.center.lat}
                            lng={defaultProps.center.lng}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    );
};

export default Search;