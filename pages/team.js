import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleOne from "@/components/Common/PageBanner/PageBannerStyleOne";
import Footer from '@/components/_App/Footer';

const Team = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="Our Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
                BGImage="transparent-bg1" 
            />

            <div className="team-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet Members of Our Exclusive Team for Startup Business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img1.jpg" alt="image" />

                                <div className="content">
                                    <h3>Christopher Lindsey</h3>
                                    <span>Business Consultant</span>

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img2.jpg" alt="image" />

                                <div className="content">
                                    <h3>Mary K. Austin</h3>
                                    <span>CEO</span>

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img3.jpg" alt="image" />

                                <div className="content">
                                    <h3>Douglas Burgess</h3>
                                    <span>Manager</span>

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img4.jpg" alt="image" />

                                <div className="content">
                                    <h3>Liam Noah</h3>
                                    <span>Business Consultant</span>

                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img5.jpg" alt="image" />

                                <div className="content">
                                    <h3>James Alina</h3>
                                    <span>CEO</span>
                                    
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img6.jpg" alt="image" />

                                <div className="content">
                                    <h3>Oliver Lucas</h3>
                                    <span>Manager</span>
                                    
                                    <ul className="social">
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
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

export default Team;