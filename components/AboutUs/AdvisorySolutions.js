import React from 'react';
import Link from 'next/link';

const AdvisorySolutions = () => {
    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-details-content">
                                <h2>Why You Should Choose Us</h2>
                                <p>Finding a residential or commercial contractor can be easy, many will advertise in local papers, Yellow Pages or online.
                                But how do you know if the residential or commercial contractor is reliable, competent and trustworthy?</p>
                                <p>You need a quality contractor,  who will do your work at a sensible price, because at the end of the day
                                people will derive great pleasure from that interior space, long after you have paid for it.
                                </p>
                                <p>We have been working as the Principle Contractor for high-profile brands including Tutti Frutti, Rajas, 
                                T4 Bubble Tea, Adam's Cash & Carry, Chunky Chicken, Seafresh Distributors,
                                Mumtaz, Kahn's, Pepe's, Coffee Spot, Wayne's Coffee and Bradford Bulls.</p>
                                <p>Our teams travel throughout the UK and Europe to fulfil contracts for clients of all sizes .</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="services-details-video">
                            <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720635588/SignOne/vesbqepzeiwswswmb40q.webp" alt="image" />

                                <Link href="/contact">
                                    <a className="default-btn">
                                        Contact Us <i className="fas fa-chevron-right"></i>
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

export default AdvisorySolutions;