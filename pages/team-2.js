import React from 'react';
import NavbarFour from "@/components/_App/NavbarFour";
import PageBannerStyleTwo from "@/components/Common/PageBanner/PageBannerStyleTwo";
import FooterThree from '@/components/_App/FooterThree';

const Team2 = () => {
    return (
        <>
            <NavbarFour />

            <PageBannerStyleTwo 
                pageTitle="Our Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
                BGImage="bg1" 
            />

            <div className="team-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">MEET THE TEAM</span>
                        <h2>Meet Members Of Our Exclusive Team For Startup Business</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="team-member">
                                <img src="/images/team/team-img4.jpg" alt="image" />

                                <div className="content">
                                    <h3>Christopher Lindsey</h3>
                                    <span>Business Consultant</span>

                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="team-member">
                                <img src="/images/team/team-img5.jpg" alt="image" />

                                <div className="content">
                                    <h3>Mary K. Austin</h3>
                                    <span>CEO</span>

                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="team-member">
                                <img src="/images/team/team-img6.jpg" alt="image" />

                                <div className="content">
                                    <h3>Douglas Burgess</h3>
                                    <span>Manager</span>

                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img7.jpg" alt="image" />

                                <div className="content">
                                    <h3>Liam Noah</h3>
                                    <span>Business Consultant</span>

                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img8.jpg" alt="image" />

                                <div className="content">
                                    <h3>James Alina</h3>
                                    <span>CEO</span>

                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <img src="/images/team/team-img9.jpg" alt="image" />

                                <div className="content">
                                    <h3>Oliver Lucas</h3>
                                    <span>Manager</span>
                                    
                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <FooterThree />
        </>
    )
}

export default Team2;