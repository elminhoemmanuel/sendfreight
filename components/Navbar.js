import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineSearch } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"

const Navbar = () => {

    const router = useRouter();
    const [nav, setNav] = useState(false);
    const [menuShow, setMenuShow] = useState(false);


    const handleClick = () => {
        setMenuShow(!menuShow);
        document.body.style.overflowY = 'hidden';

    }
    const handleClickMobile = () => {
        setMenuShow(!menuShow);
        document.body.style.overflowY = 'visible';
    }

    return (

        <>

            {/* mobile screens vertical nav */}
            <div className={menuShow ? "mobile-box-show" : "mobile-box"}>
                <div className="cancel-box" >
                    <button onClick={() =>{setMenuShow(!menuShow)}} className="close-btn"><CgClose className="close-icon" /></button>
                </div>
                <div className="vert-nav">
                    <div className="holders">
                        <button className="req-btn">
                            Request Quote
                        </button>
                    </div>

                    <div className="holders">
                        <button className="book-btn">
                            Book Shipment
                        </button>
                    </div>

                </div>
            </div>


            {/* Navigation Bar on large screens */}
            <div className=''>
                <nav className='navbar' >

                    {/* Left side of Navigation Bar */}
                    <div className="nav-left">
                        <Link href="/">
                            <a className='logo-link'>
                                <div className="logo-box">
                                    <span className='logo-send'>Send</span>
                                    <span className='logo-freight'>&nbsp;FREIGHT</span>
                                </div>
                            </a>
                        </Link>

                        <div className="search-holder">
                            <input className="searchfield" type="text" placeholder="Search" />
                            <div><AiOutlineSearch className="search-icon" /></div>
                        </div>

                    </div>

                    {/* Right side of Navigation Bar */}
                    <div className="nav-right">

                        <button className="req-btn">
                            Request Quote
                        </button>


                        <button className="book-btn">
                            Book Shipment
                        </button>

                        <button onClick={() =>{setMenuShow(!menuShow)}} className="menu-btn">
                            <GiHamburgerMenu className="hamburger" />
                        </button>

                    </div>

                </nav>
            </div>
        </>

    )
}

export default Navbar
