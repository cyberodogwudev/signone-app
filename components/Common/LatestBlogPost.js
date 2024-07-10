import React from 'react';
import Link from 'next/link';

const LatestBlogPost = () => {
    return (
        <>
            <div className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Something Latest Blog Share Our Thoughts On Business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-post">
                                <img src="/images/blog/blog-img1.jpg" alt="image" />

                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar-alt"></i> Dec 02, 2020</li>
                                        <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>Shelley Percy</a></Link></li>
                                    </ul>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>They Focus on Digital Products and Virtual Services</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="link-btn">Read More <i className="fas fa-chevron-right"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-post">
                                <img src="/images/blog/blog-img2.jpg" alt="image" />

                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar-alt"></i> Dec 03, 2020</li>
                                        <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>Amanda Brown</a></Link></li>
                                    </ul>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>How to Succeed As The First Time Any Business</a>
                                        </Link>
                                    </h3> 
                                    
                                    <Link href="/blog-details">
                                        <a className="link-btn">Read More <i className="fas fa-chevron-right"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-blog-post">
                                <img src="/images/blog/blog-img3.jpg" alt="image" />

                                <div className="content">
                                    <ul className="meta">
                                        <li><i className="far fa-calendar-alt"></i> Dec 01, 2020</li>
                                        <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>George Helms</a></Link></li>
                                    </ul>
                         
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Top Tips Providers For Your Business For 2021</a>
                                        </Link>
                                    </h3> 
                                    
                                    <Link href="/blog-details">
                                        <a className="link-btn">Read More <i className="fas fa-chevron-right"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LatestBlogPost;