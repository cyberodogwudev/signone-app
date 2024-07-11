import React from 'react';

const ContactInfoStyleTwo = () => {
    return (
        <>
            <div className="contact-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-contact-info-box text-center">
                                <div className="icon">
                                    <i className='fas fa-map-marker-alt'></i>
                                </div>
                                <h3>Address</h3>
                                <p><a href="#" target="_blank">Weldarc Works Bradford Lane,
                                Bradford BD3 8LW, United Kingdom</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-contact-info-box text-center">
                                <div className="icon">
                                    <i className='fas fa-phone-volume'></i>
                                </div>
                                <h3>Phone</h3>
                                <p><a href="tel:+447544786044">Phone: +44 7544 786 044</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-contact-info-box text-center">
                                <div className="icon">
                                    <i className='far fa-envelope'></i>
                                </div>
                                <h3>Email</h3>
                                <p><a href="mailto:saj@signoneshopfitters.com">saj@signoneshopfitters.com</a></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-contact-info-box text-center">
                                <div className="icon">
                                    <i className='fas fa-hourglass-half'></i>
                                </div>
                                <h3>Working Hours</h3>
                                <p>Monday - Friday</p>
                                <p>9:00AM - 18:00PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfoStyleTwo;