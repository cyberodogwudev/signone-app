import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleOne from "@/components/Common/PageBanner/PageBannerStyleOne";
import Link from 'next/link';
import Footer from '@/components/_App/Footer';

const PortfolioTwoColumn = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="Portfolio Two Column" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio" 
                BGImage="transparent-bg1" 
            />

            <div className="works-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">OUR WORKS</span>
                        <h2>We Are Doing All The Work For The Client in a Successful Way</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img1.jpg" alt="image" />

                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Close Up Day</a>
                                        </Link>
                                    </h3>
                                    <span>Mug</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img2.jpg" alt="image" />

                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Valentine Concept</a>
                                        </Link>
                                    </h3>
                                    <span>Mockup</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img3.jpg" alt="image" />
 
                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Pocket T-Shirt</a>
                                        </Link>
                                    </h3>
                                    <span>White</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img4.jpg" alt="image" />
 
                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>3D Rendering Gift</a>
                                        </Link>
                                    </h3>
                                    <span>Display</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img5.jpg" alt="image" />

                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Print</a>
                                        </Link>
                                    </h3>
                                    <span>Display</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img6.jpg" alt="image" />
 
                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Print Texture</a>
                                        </Link>
                                    </h3>
                                    <span>Flat</span>
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

export default PortfolioTwoColumn;