import React, { useEffect, useState } from 'react';
import { fetchIP } from '../../utils/FetchIP';
import './PublicIP.css'

const PublicIP = () => {
    const [userIP, setUserIP] = useState([]);

    useEffect(() => {
        fetchIP()
            .then(items => {
                setUserIP(items.ip)
            })


    }, [])


    return (
        <div className='PublicIP'>
            <h4> Your IP Address : <span style={{
                color: 'rgba(0, 0, 0, 0.85)'
            }}>{userIP}</span>
            </h4>
        </div>
    )
}

export default PublicIP