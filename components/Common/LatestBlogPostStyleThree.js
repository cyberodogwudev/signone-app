import React from 'react';
import Link from 'next/link';

const LatestBlogPostStyleThree = () => {
    return (
        <>
            <div className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title it-agency-color">OUR BLOG</span>
                        <h2>Our Latest News</h2>
                    </div>

                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="single-post-item border-radius bg-faf2ff it-agency-color">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a className="d-block">
                                            <img src="/images/blog/blog-img15.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                        <li>
                                            <i className="far fa-user-circle"></i> 
                                            <Link href="/blog"><a>Amanda Brown</a></Link>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>How to use IT to improve your office culture</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="link-btn">
                                            Read More <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="single-post-item border-radius bg-eaf6ff it-agency-color">
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 01, 2020</li>
                                                <li>
                                                    <i className="far fa-user-circle"></i> 
                                                    <Link href="/blog"><a>Sarah Taylor</a></Link>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Does your business have the best solution IT set-up for success in 2020?</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="link-btn">
                                                    Read More <i className="fas fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-6">
                                    <div className="single-post-item border-radius bg-fff5e6 it-agency-color">
                                        <div className="post-content">
                                            <ul className="meta">
                                                <li><i className="far fa-calendar-alt"></i> Dec 01, 2020</li>
                                                <li>
                                                    <i className="far fa-user-circle"></i> 
                                                    <Link href="/blog"><a>Jason Roy</a></Link>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>The Technology products can help you outshine  the competition in 2020</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="link-btn">
                                                    Read More <i className="fas fa-chevron-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestBlogPostStyleThree;