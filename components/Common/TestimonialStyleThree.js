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

const TestimonialStyleThree = () => {

    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className="testimonials-area bg-f9f9f9 ptb-100">
                <div className="container">
                    <div className="testimonials-inner it-agency-color">
                        {display ? <OwlCarousel 
                            className="testimonials-slides owl-carousel owl-theme"
                            {...options}
                        > 
                            <div className="testimonials-item">
                                <i className="icon flaticon-quotation"></i>
                                <p>“We recently engaged SignOne Shopfitters for the complete renovation of our commercial office space, and we couldn't be happier with the results
                                    .From the very beginning, their team demonstrated exceptional professionalism and creativity. They took the time to understand our vision and provided invaluable suggestions that truly enhanced the final design.”</p>

                                <div className="info d-flex align-items-center justify-content-center">
                                    <img src="/images/user/user1.jpg" alt="image" />
                                    <div className="title">
                                        <h3>Allan Morris</h3>
                                        <span>Director</span>
                                    </div>
                                </div>
                            </div>
        
                            <div className="testimonials-item">
                                <i className="icon flaticon-quotation"></i>
                                <p>“Working with SignOne Shopfitters for the fit-out of my new retail store was an absolute pleasure. From our initial consultation to the final handover, their team displayed a remarkable level of expertise and dedication”</p>

                                <div className="info d-flex align-items-center justify-content-center">
                                    <img src="/images/user/user2.jpg" alt="image" />
                                    <div className="title">
                                        <h3>Sarah Taylor</h3>
                                        <span>CEO</span>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialStyleThree;