import React, { useState } from "react";
import Link from '@/utils/ActiveLink';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="noke-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a onClick={toggleNavbar} className="navbar-brand">
                                    <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720470665/SignOne/dciiexvsoosudsowyyki.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/index-it-agency">
                                            <a onClick={toggleNavbar} className="nav-link">Home</a>
                                            </Link> 

                                            
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-us" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/services-2" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Services</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/gallery-2" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Gallery</a>
                                            </Link> 
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/contact-us" activeClassName="active">
                                            <a onClick={toggleNavbar} className="nav-link">Contact Us</a>
                                            </Link>
                                        </li>
                                    </ul>
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <div className="search-icon" onClick={handleToggleSearchModal}>
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>

                                    <div className="option-item">
                                        <div className="social-links">
                                            <span>
                                                <a href="https://www.facebook.com/" target="_blank">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a href="https://www.instagram.com/" target="_blank">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a href="https://twitter.com/" target="_blank">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </span>
                                            <span>
                                                <a href="https://www.linkedin.com/" target="_blank">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
 
            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        
                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className='bx bx-search-alt'></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
}

export default Navbar;