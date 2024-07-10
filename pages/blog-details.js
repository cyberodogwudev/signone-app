import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleOne from "@/components/Common/PageBanner/PageBannerStyleOne";
import Link from 'next/link';
import Footer from '@/components/_App/Footer';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import Comments from '@/components/Blog/Comments';

const BlogRightSidebar = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
                BGImage="transparent-bg1" 
            />

            <div className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog/blog-img4.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="far fa-user-circle"></i> <Link href="/blog"><a>Chris Orwig</a></Link></li>
                                            <li><i className="far fa-calendar-alt"></i> 15 Jan, 2021</li>
                                            <li>
                                                <i className="far fa-comment-alt"></i>
                                                <Link href="/blog"><a>04 Comments</a></Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>They Focus on Digital Products and Virtual Services</h3>
                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                    <blockquote className="wp-block-quote">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                    <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing.</p>
                                    
                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-img12.jpg" alt="image" />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-img13.jpg" alt="image" />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog-img14.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <h3>Four major elements that we offer:</h3>
                                    <ul className="features-list">
                                        <li>Scientific skills for getting a better result</li>
                                        <li>Communication skills to getting in touch</li>
                                        <li>A career overview opportunity available</li>
                                        <li>A good work environment for work</li>
                                    </ul>
                                    <h3>Setting the mood with incense</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                    <h3>The rise of marketing and why you need it</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <div className="d-flex align-items-center">
                                            <p>Tags:</p>
                                            <Link href="/blog"><a>Business</a></Link>
                                            <Link href="/blog"><a>Startup</a></Link>
                                            <Link href="/blog"><a>Agency</a></Link>
                                        </div>
                                    </div>
                                    
                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li><a href="#" className="facebook" target="_blank"><i className='fab fa-facebook-f'></i></a></li>
                                            <li><a href="#" className="twitter" target="_blank"><i className='fab fa-twitter'></i></a></li>
                                            <li><a href="#" className="linkedin" target="_blank"><i className='fab fa-linkedin-in'></i></a></li>
                                            <li><a href="#" className="instagram" target="_blank"><i className='fab fa-instagram'></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Comments */}
                                <Comments />
                            </div>
                        </div>
                    
                        <div className="col-lg-4 col-md-12">
                            <div className="right-sidebar pl-20">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default BlogRightSidebar;