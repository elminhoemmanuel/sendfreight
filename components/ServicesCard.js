import React from 'react'
import { MdAirplanemodeActive } from "react-icons/md"
import { RiShipFill } from "react-icons/ri"
import { FaTruck } from "react-icons/fa"
import { GiPoliceOfficerHead } from "react-icons/gi"

const ServicesCard = () => {
    return (
        <div className="services-card">
            <p className="card-header">Select a service</p>

            <div className="services">
                <div className="card-item active">
                    <p >Air Freight</p>
                    <div><MdAirplanemodeActive className="card-icon" /></div>
                </div>
                <div className="card-item">
                    <p >Sea Freight</p>
                    <div><RiShipFill className="card-icon" /></div>
                </div>
                <div className="card-item">
                    <p >Inland<br/>(Truck & Barge)</p>
                    <div><FaTruck className="card-icon" /></div>
                </div>
                <div className="card-item">
                    <p >Customs<br/>Clearance</p>
                    <div><GiPoliceOfficerHead className="card-icon" /></div>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard
