import React from 'react';
import Link from 'next/link';

const OurITServices = () => {
    return (
        <>
            <div className="features-area bg-f9f9f9 pt-100 pt-100 pb-70">
                <div className="container">
                <div className="section-title">
                        <span className="sub-title it-agency-color">OUR IT SERVICES</span>
                        <h2>Discover Services We're Provided</h2>
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="features-item bg-6d5fff">
                                <div className="d-flex align-items-center">
                                    <i className="icon flaticon-seo"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Spray Plastering</a>
                                        </Link>
                                    </h3>
                                </div>
                                <p>We have over 20 year's experience providing our spray plastering services throughout the whole of the UK.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="features-item bg-ff9f07">
                                <div className="d-flex align-items-center">
                                    <i className="icon flaticon-application"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Flooring</a>
                                        </Link>
                                    </h3>
                                </div>
                                <p>We are domestic and commercial flooring contractors based in Leeds offering a selection of floor covering options...
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="features-item bg-2ea7ff">
                                <div className="d-flex align-items-center">
                                    <i className="icon flaticon-bullhorn"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Joinery Services</a>
                                        </Link>
                                    </h3>
                                </div>
                                <p>We are based in Bradford,
                                ﻿ specialising in all aspects of joinery and building, from small domestic to large commercial projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurITServices;