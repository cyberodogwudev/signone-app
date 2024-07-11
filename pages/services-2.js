import React from 'react';
import NavbarFour from "@/components/_App/NavbarThree";
import PageBannerStyleThree from "@/components/Common/PageBanner/PageBannerStyleThree";
import Link from 'next/link';
import FooterThree from '@/components/_App/FooterThree';

const Services2 = () => {
    return (
        <>
            <NavbarFour />

            <PageBannerStyleThree 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                BGImage="bg5" 
            />

            <div className="services-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">WHAT WE DO</span>
                        <h2>All The Services That We Provide to Our Clients</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720639556/SignOne/s791njgwbhwx1fy5plhc.jpg" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Spray Plastering</a>
                                        </Link>
                                    </h3>
                                    <p>We have over 20 year's experience providing our spray plastering services throughout the whole of the UK.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720639561/SignOne/vbxnzjqjmkposz9qmfug.png" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Flooring</a>
                                        </Link>
                                    </h3>
                                    <p>We are domestic and commercial flooring contractors based in Leeds offering a selection of floor covering options...</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720639558/SignOne/lic2jfjvxum7ptflv7ti.png" alt="image" />
                                <div className="content">
                                    <h3>
                                        <Link href="/services-details">
                                            <a>Joinery Services</a>
                                        </Link>
                                    </h3>
                                    <p>We are based in Bradford, ﻿ specialising in all aspects of joinery and building, from small domestic to large commercial projects.</p>
                                </div>
                            </div>
                        </div>

                        

                  


                        {/* <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="next page-numbers">
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                                <a href="#" className="page-numbers current">1</a>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
  
            <FooterThree />
        </>
    )
}

export default Services2;