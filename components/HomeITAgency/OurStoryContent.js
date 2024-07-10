import React from 'react';
import Link from 'next/link';

const OurStoryContent = () => {
    return (
        <>
            <div className="about-area pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="it-agency-about-image">
                                <div className="main-image">
                                    <img src="/images/about/about-img6.jpg" alt="image" />
                                    <img src="/images/about/about-img7.jpg" alt="image" />
                                </div>

                                <div className="shape18">
                                    <img src="/images/shape/shape18.png" alt="image" />
                                </div>
                                <div className="shape19">
                                    <img src="/images/shape/shape19.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="it-agency-about-content">
                                <span className="sub-title">OUR STORY</span>
                                <h2>We Have Helped Many Different Companies</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <p>Maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                                <Link href="/about-classic">
                                    <a className="default-btn it-agency-color">
                                        Learn More <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStoryContent;