import React from 'react'
import { BsToggleOff } from "react-icons/bs"

const AdditionalCard = () => {
    return (
        <div className="add-card">
            <p className="card-header" style={{ marginBottom: "2rem" }}>Additional Services</p>

            <div className="top">
                <div className="first-row">
                    <button className="toggle-on-btn"><BsToggleOff className="toggle-on-icon" /></button>
                    <div>
                        <p className="card-header">Export Forwarding</p>
                        <p style={{ marginTop: "0.3rem" }}>We handle Customs clearance and documentation</p>
                    </div>
                </div>
                <div className="first-row">
                    <button className="toggle-on-btn"><BsToggleOff className="toggle-on-icon" /></button>
                    <div>
                        <p className="card-header">Import Customs Clearance</p>
                        <p style={{ marginTop: "0.3rem" }}>We handle import customs and regulatory requirements</p>
                    </div>
                </div>
            </div>

            <div className="top">
                <div className="first-row">
                    <button className="toggle-on-btn"><BsToggleOff className="toggle-on-icon" /></button>
                    <div>
                        <p className="card-header">Cargo Insurance</p>
                        <p style={{ marginTop: "0.3rem" }}>Protect your cargo from logistics risk up to it's full value</p>
                    </div>
                </div>
                <div className="first-row">
                    <button className="toggle-on-btn"><BsToggleOff className="toggle-on-icon" /></button>
                    <div>
                        <p className="card-header">Transport / Delivery</p>
                        <p style={{ marginTop: "0.3rem" }}>We deliver the cargo to your doorstep from the ports</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalCard
