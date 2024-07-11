import React from 'react';
import Link from 'next/link';

const AboutContent = () => {
    return (
        <>
            <div className="about-area ptb-100">
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
                                <p>We draw on a wealth of experience to provide a full and comprehensive project service. 
                                Having all these operations in house means our service to our clients is both time efficient,
                                uncomplicated and competitive in price; 
                                without the need to compromise with materials or craftsmanship.</p>
                                <p>We provide Quick Service Restaurant sector, leisure facilities, bespoke restaurants,
                                office refurbishments and high-end residential projects.</p>
                                <p>During our many years in business we have established an extensive team of skilled craftsmen and trades covering…</p>

                                <ul className="features-list">
                                    <li>Signage and Graphics</li>
                                    <li>Internal walls and glass partitioning</li>
                                    <li>Suspended Ceiling</li>
                                    <li>Firelined, acoustic ceilings</li>
                                    <li>Drylining</li>
                                    <li>Wall finishes</li>
                                    <li>Wall cladding</li>
                                    <li>Flooring</li>
                                    <li>Bespoke joinery</li>
                                    <li>Bespoke furniture</li>
                                    <li>Decorations</li>
                                    <li>Heating and Plumbing</li>
                                    <li>Electrical and Lighting</li>
                                    <li>HIK CCTV installations</li>
                                    <li>HVAC installations</li>


                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent;