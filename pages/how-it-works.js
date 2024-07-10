import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleFour from "@/components/Common/PageBanner/PageBannerStyleFour";
import Footer from '@/components/_App/Footer';

const HowITWorks = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleFour 
                pageTitle="How It Works" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="How It Works" 
                BGImage="bg3" 
            />

            <div className="short-brief-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">PROCESS</span>
                        <h2>How It Works</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="short-brief-content">
                                <ul className="timeline">
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span className="sub-title">Stanford University - <span>2003</span></span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3>Computer Science</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
                                        </div>
                                    </li>

                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span className="sub-title">Harvard University - <span>2005</span></span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3>Bachelor's Degree</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
                                        </div>
                                    </li>

                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span className="sub-title">Stanford University - <span>2007</span></span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3>Computer Programming</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="short-brief-content">
                                <ul className="timeline">
                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span className="sub-title">EnvyTheme - <span>2017 - Present</span></span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3>Graphics Designer</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
                                        </div>
                                    </li>

                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span className="sub-title">ThemeForest - <span>2015 - 2017</span></span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3>UX/UI Designer</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
                                        </div>
                                    </li>

                                    <li className="timeline-item">
                                        <div className="timeline-info">
                                            <span className="sub-title">Envato - <span>2014</span></span>
                                        </div>
                                        <div className="timeline-marker"></div>
                                        <div className="timeline-content">
                                            <h3>Jonior Web Developer</h3>
                                            <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="process-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">MARKETING PROCESS</span>
                        <h2>We Have The Main Process to Run The Marketing</h2>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process1.png" alt="image" />
                                <h3>Marketing Plan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process2.png" alt="image" />
                                <h3>Marketing Execution</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process3.png" alt="image" />
                                <h3>Growth & Scale</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              
            <Footer />
        </>
    )
}

export default HowITWorks;