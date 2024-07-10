import React from 'react';
import Link from 'next/link';

const FeaturesCard = () => {
    return (
        <>
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="features-item bg-6d5fff">
                                <div className="d-flex align-items-center">
                                    <i className="icon flaticon-seo"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Web Applications</a>
                                        </Link>
                                    </h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eranori, Suspendisse varius enim in eros elementum tristique.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="features-item bg-ff9f07">
                                <div className="d-flex align-items-center">
                                    <i className="icon flaticon-application"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Mobile Applications</a>
                                        </Link>
                                    </h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eranori, Suspendisse varius enim in eros elementum tristique.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="features-item bg-2ea7ff">
                                <div className="d-flex align-items-center">
                                    <i className="icon flaticon-bullhorn"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit eranori, Suspendisse varius enim in eros elementum tristique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesCard;