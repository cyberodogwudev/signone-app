import React from 'react';
import Link from 'next/link';

const ServicesSidebar = () => {
    return (
        <>
            <aside className="widget-area extra-padding">
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>

                <div className="widget widget_service_categories">
                    <h3 className="widget-title">Service Category</h3>

                    <ul>
                        <li>
                            <Link href="/services-details">
                                <a>Startup Advisory Solutions <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Business Incorporation <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Entrepreneur Consulting Services <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Communication <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Business Planning <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Brand Development <i className="fas fa-chevron-right"></i></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_about_author">
                    <h3 className="widget-title">About Author</h3>

                    <div className="about-author">
                        <img src="/images/user/user1.jpg" className="main-image" alt="image" />
                        <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis maecenas hello.</p>
                        <img src="/images/signature.png" alt="image" />
                    </div>
                </div>

                <div className="widget widget_newsletter">
                    <h4>Subscribe To Our Newsletter</h4>
                    <p>Subscribe to our newsletter to get the new updates!</p>

                    <form className="newsletter-form">
                        <input type="email" className="input-newsletter" placeholder="Enter your email" name="EMAIL" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </aside>
        </>
    )
}

export default ServicesSidebar;