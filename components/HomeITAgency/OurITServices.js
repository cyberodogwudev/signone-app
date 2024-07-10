import React from 'react';
import Link from 'next/link';

const OurITServices = () => {
    return (
        <>
            <div className="services-area bg-f9f9f9 pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title it-agency-color">OUR IT SERVICES</span>
                        <h2>Discover Services We're Provided</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-it-services-box bg-6d5fff">
                                <i className="icon flaticon-web-development"></i>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Web Development</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-it-services-box bg-ff9f07">
                                <i className="icon flaticon-development-3"></i> 
                                <h3>
                                    <Link href="/services-details">
                                        <a>Mobile Development</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-it-services-box bg-89c111">
                                <i className="icon flaticon-digital-marketing-1"></i> 
                                <h3>
                                    <Link href="/services-details">
                                        <a>Digital Marketing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-it-services-box bg-ca83ff">
                                <i className="icon flaticon-analytics"></i> 
                                <h3>
                                    <Link href="/services-details">
                                        <a>Business Analytics</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-it-services-box bg-ff5f5f">
                                <i className="icon flaticon-solution-1"></i> 
                                <h3>
                                    <Link href="/services-details">
                                        <a>Design Solution</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-it-services-box bg-2ea7ff">
                                <i className="icon flaticon-consulting-1"></i> 
                                <h3>
                                    <Link href="/services-details">
                                        <a>IT Consulting</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurITServices;