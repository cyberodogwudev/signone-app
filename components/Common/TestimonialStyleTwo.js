import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    items: 1,
    nav: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    navText: [
        "<i class='flaticon-left-arrow'></i>",
        "<i class='flaticon-right-arrow'></i>"
    ]
};

const TestimonialStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="marketing-testimonials-area pb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title marketing-color">TESTIMONIALS</span>
                        <h2>What Our Customers Say</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="marketing-testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >  
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="marketing-testimonials-image">
                                    <img src="/images/testimonials/testimonials-img3.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="marketing-testimonials-content">
                                    <i className="icon flaticon-quotation"></i>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus com modo viverra maecenas accumsan lacus vel facilisis.”</p>
                                    <div className="info">
                                        <h3>Sarah Taylor</h3>
                                        <span>Director</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="marketing-testimonials-image">
                                    <img src="/images/testimonials/testimonials-img4.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="marketing-testimonials-content">
                                    <i className="icon flaticon-quotation"></i>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus com modo viverra maecenas accumsan lacus vel facilisis.”</p>
                                    <div className="info">
                                        <h3>Richard Turner</h3>
                                        <span>CEO & Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleTwo;