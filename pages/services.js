import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleOne from "@/components/Common/PageBanner/PageBannerStyleOne";
import Footer from '@/components/_App/Footer';
import Link from 'next/link';

const Services = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                BGImage="transparent-bg5" 
            />

            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>We Have The Main Features to Run The Business</h2>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-features-box">
                                <i className="icon flaticon-chat"></i>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Communication</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod lorem ipsum.</p>

                                <Link href="/services-details">
                                    <a className="link-btn">
                                        Discover <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-features-box">
                                <i className="icon flaticon-planning"></i> 
                                <h3>
                                    <Link href="/services-details">
                                        <a>Business Planning</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod lorem ipsum.</p>
                                
                                <Link href="/services-details">
                                    <a className="link-btn">
                                        Discover <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-features-box">
                                <i className="icon flaticon-development-1"></i> 
                                <h3>
                                    <Link href="/services-details">
                                        <a>Brand Development</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod lorem ipsum.</p>
                                
                                <Link href="/services-details">
                                    <a className="link-btn">
                                        Discover <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>All The Services That We Provide to Our Clients</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <img src="/images/services/services-img1.jpg" alt="image" />

                                <div className="content">
                                    <i className="icon flaticon-solution"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Start Up Advisory Solutions</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>

                                    <Link href="/services-details">
                                        <a className="link-btn">
                                            Discover <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <img src="/images/services/services-img2.jpg" alt="image" />

                                <div className="content">
                                    <i className="icon flaticon-contract-1"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Business Incorporation</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                    
                                    <Link href="/services-details">
                                        <a className="link-btn">
                                            Discover <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <img src="/images/services/services-img3.jpg" alt="image" />

                                <div className="content">
                                    <i className="icon flaticon-consultant-services"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Entrepreneur Consulting Services</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                    
                                    <Link href="/services-details">
                                        <a className="link-btn">
                                            Discover <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <img src="/images/services/services-img4.jpg" alt="image" />

                                <div className="content">
                                    <i className="icon flaticon-consultant-services"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                    
                                    <Link href="/services-details">
                                        <a className="link-btn">
                                            Discover <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <img src="/images/services/services-img5.jpg" alt="image" />

                                <div className="content">
                                    <i className="icon flaticon-consultant-services"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Strategy & Planning</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                    
                                    <Link href="/services-details">
                                        <a className="link-btn">
                                            Discover <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-services-box">
                                <img src="/images/services/services-img6.jpg" alt="image" />

                                <div className="content">
                                    <i className="icon flaticon-consultant-services"></i>
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Search Engine Optimization</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing labore et dolore magna aliqua.</p>
                                    
                                    <Link href="/services-details">
                                        <a className="link-btn">
                                            Discover <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <Footer />
        </>
    )
}

export default Services;