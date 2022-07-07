import React from 'react';
import packetsData from '../../db/packets';
import './PacketsInfo.css'

const PacketsInfo = () => {
    return (
        <div className='packets_container'>
            <h2>Current Networks </h2>
            <div className='Packets'>
                {
                    packetsData.map((packetData, index) => {
                        return (
                            <div className='packet' key={index}>
                                <h3> {packetData.name} </h3>
                                <p> {packetData.network} </p>
                                <p> {packetData.speed} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PacketsInfo