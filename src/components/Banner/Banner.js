import React from 'react';
import './Banner.css'
// import banner from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div>
                <h2> Sextant </h2>
                <p>
                    A network diagnostic tool that provides information <br /> about current network and the various said services for Field technicians.
                </p>
                <button>
                    <a href='https'> Sign Up</a>
                </button>
            </div>

            {/* <img src={banner} height='600px' alt='Banner' style={{ objectFit: 'contain' }} /> */}

        </div>
    )
}

export default Banner