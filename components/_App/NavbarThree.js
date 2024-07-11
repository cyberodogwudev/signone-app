import React from "react";
import Link from '@/utils/ActiveLink';
import TopHeaderStyleOne from "./TopBar/TopBar";

const NavbarThree = () => {
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
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <> 
            <div className="header-area p-absolute">
                <TopHeaderStyleOne />

                <div id="navbar" className="navbar-area color-white it-agency-color">
                    <div className="noke-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/index-it-agency">
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
                                            <div className="search-box">
                                                <input type="text" className="input-search" placeholder="Search" />
                                                <button type="submit">
                                                    <i className="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarThree;