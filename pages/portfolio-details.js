import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleOne from "@/components/Common/PageBanner/PageBannerStyleOne";
import Footer from '@/components/_App/Footer';
import PortfolioSidebar from '@/components/portfolio/PortfolioSidebar';

const PortfolioDetails = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="Print Texture" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Portfolio Details" 
                BGImage="transparent-bg1" 
            />

            <div className="portfolio-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="portfolio-details-image">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <img src="/images/portfolio/portfolio-img1.jpg" alt="image" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                        <img src="/images/portfolio/portfolio-img5.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-details-desc">
                                <h3>Project Details</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry's standard dummy text since. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>

                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="image">
                                            <img src="/images/portfolio/portfolio-img3.jpg" alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="content">
                                            <h3>Important Facts</h3>
                                            <ul>
                                                <li>The Field of Data Science</li>
                                                <li>The Problem</li>
                                                <li>The Solution</li>
                                                <li>The Skills</li>
                                                <li>Statistics</li>
                                                <li>Mathematics</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                                <h3>Results</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna ad aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco labori.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <PortfolioSidebar />
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default PortfolioDetails;