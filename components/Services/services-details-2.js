import React from 'react';
import NavbarFour from "@/components/_App/NavbarThree";
import PageBannerStyleThree from "@/components/Common/PageBanner/PageBannerStyleThree";
import TestimonialStyleFour from '@/components/Common/TestimonialStyleFour';
import FooterThree from '@/components/_App/FooterThree';

const ServicesDetails2 = () => {
    return (
        <>
            <NavbarFour />

            <PageBannerStyleThree 
                pageTitle="Web Development" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Web Development" 
                BGImage="bg5" 
            />

            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="services-details-desc">
                                <h3>Services Details</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <img src="/images/services/services-img15.jpg" alt="image" />
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <strong>nonumy</strong> eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.</p>
                                <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren no sea takimata sanctus.</p>
                                <h3>Initial Planning</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <p><strong>1.</strong> Sony PlayStation 4 Pro – Best Overall<br />
                                    <strong>2.</strong> Xbox One S – Best Gaming Console for Multimedia<br />
                                    <strong>3.</strong> Nintendo Switch – Best Hybrid Gaming Console<br />
                                    <strong>4.</strong> Nintendo Switch Lite – Best for Portable Play
                                </p>
                                <h3>Discuss The Project</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam <a href="#" target="_blank">voluptuased</a> diam voluptua.</p>
                                <ul>
                                    <li>a console</li>
                                    <li>Two Joy-Con controllers that are detachable</li>
                                    <li>A grip that enables you to combine them into a single gamepad for play on the TV</li>
                                    <li>Two straps for turning the Joy-Cons into individual controllers</li>
                                    <li>A dock which you can use to connect your console to the television for traditional gameplay</li>
                                </ul>
                                <h3>Consultation</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <p><strong>Last Updated: January 01, 2021 at 24:00 PM</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PricingCardStyleThree />

            <TestimonialStyleFour />

            <FooterThree />
        </>
    )
}

export default ServicesDetails2;