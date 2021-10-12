import React from 'react'
import { MdArrowBack } from "react-icons/md"
import ServicesCard from './ServicesCard'

const Body = () => {
    return (
        <div className="body">
            <div className="top-header">
                <div className="top-header-box">
                    <button className="back-btn">
                        <MdArrowBack className="back-icon" />
                    </button>

                    <div className="main">
                        <p className="page-header">New Booking</p>

                        <div className="top-explainer">
                            <p>Fill in the information below to get a quote or create a new booking</p>
                        </div>

                        <div className="sections">
                            <ServicesCard />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Body
