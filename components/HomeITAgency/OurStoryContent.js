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
                                    <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720581617/SignOne/xlrxmycrccllniwphi8f.png" alt="image" />
                                    <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720581617/SignOne/xsqpso9bz0slnx83tlqw.png" alt="image" />
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
                                <h2>We believe first impressions count the most in business. With over 22 years experience in the industry. </h2>
                                <p>We are at the forefront in Sign making and Shop fitting Service within Bradford region.</p>
                                <p>At our UK head office in Bradford, West Yorkshire, we have an in house team of CAD designer, graphic designers.</p>
                                <p>We have sign makers and fabricators, carpenters and cabinet makers,
working alongside our installation team of shop fitters which include electricians,
lighting technicians, plasters, plumbers, flooring, joiners and building contractors.</p>
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