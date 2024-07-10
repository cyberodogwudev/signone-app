import React from 'react';
import NavbarFour from "@/components/_App/NavbarFour";
import PageBannerStyleThree from "@/components/Common/PageBanner/PageBannerStyleThree";
import Link from 'next/link';
import Footer from '@/components/_App/Footer';

const PortfolioTwoColumn = () => {
    return (
        <>
            <NavbarFour />

            <PageBannerStyleThree 
                pageTitle="Portfolio Three Column" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio" 
                BGImage="bg1" 
            />

            <div className="works-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">OUR WORKS</span>
                        <h2>We Are Doing All The Work For The Client in a Successful Way</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
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

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img7.jpg" alt="image" />
 
                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>3D Laptop</a>
                                        </Link>
                                    </h3>
                                    <span>Kind</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img8.jpg" alt="image" />
 
                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>Skincare Cosmetic</a>
                                        </Link>
                                    </h3>
                                    <span>Bottle</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works-item">
                                <img src="/images/portfolio/portfolio-img9.jpg" alt="image" />
 
                                <div className="content">
                                    <Link href="/portfolio-details">
                                        <a className="link-btn">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href="/portfolio-details">
                                            <a>HD Smartphone</a>
                                        </Link>
                                    </h3>
                                    <span>Mobile</span>
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