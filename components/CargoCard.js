import React from 'react'
import { FaToggleOn } from "react-icons/fa"

const CargoCard = () => {
    return (
        <div className="cargo-card">
            <div className="cargo-top">
                <div className="header-box"><p className="card-header">Cargo Details</p></div>
                <div className="toggle-box">
                    <button className="toggle-on-btn"><FaToggleOn className="toggle-on-icon" /></button>
                    <p className="" style={{ fontWeight: 'bold' }}>Dangerous Cargo(ex. Chemicals, Battery)</p>
                </div>
            </div>

            <div className="tabs">
                <button className="dim">
                    Total Dimensions
                </button>
                <button className="details">
                    Package Details
                </button>
            </div>

            <div className="textfields-box">
                <div className="first-input">
                    <div className="label"><label>Total Volume</label></div>
                    <div className="unit">cbm</div>
                    <input type="text" className="field" id="label" />
                </div>
                <div className="second-input">
                    <div className="label"><label>Total Weight</label></div>
                    <div className="unit">kg</div>
                    <input type="text" className="field" id="label" />
                </div>
            </div>


        </div>
    )
}

export default CargoCard
