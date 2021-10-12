import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import { TiLocation } from "react-icons/ti"
import { BsFillCalendarFill } from "react-icons/bs"

const LocationCard = () => {
    return (
        <div className="location-card">
            <p><AiOutlineInfoCircle className="info-icon" /></p>

            <div className="loc-content-1 ">
                <div className="loc-item-1 ">
                    <button className="import">
                        Import
                    </button>
                    <button className="export">
                        Export
                    </button>
                </div>

                <div className="loc-item-2 ">
                    <input type="text" className="grayinputs" placeholder="City or port" />
                    <div className="adornment">
                        <div className="adorn-right"><TiLocation className="adorn-icon" /></div>
                        <div className="adorn-left" style={{fontWeight: "bold"}}>From</div>
                    </div>

                </div>

                <div className="loc-item-3 ">
                    <input type="text" className="grayinputs" placeholder="City or port" />
                    <div className="adornment">
                        <div className="adorn-right"><TiLocation className="adorn-icon" /></div>
                        <div className="adorn-left" style={{fontWeight: "bold"}}>To</div>
                    </div>
                </div>

               
            </div>

            <div className="loc-content-2 " style={{marginTop:"2.5rem"}}>
                <div className="item-1 ">
                    <input type="text" className="grayinputs" placeholder="Ready date" />
                    <div className="adornment">
                        <div className="adorn-right"><BsFillCalendarFill className="adorn-icon" /></div>
                        <div className="adorn-left" style={{fontWeight: "bold"}}></div>
                    </div>
                </div>

                <div className="item-2 ">
                    <select className="grayinputs">
                        <option>Incoterms</option>
                    </select>

                </div>

                <div className="item-3 ">
                    <input type="text" className="grayinputs" placeholder="Total cargo value" />
                </div>

               
            </div>
        </div>
    )
}

export default LocationCard
