import React from 'react';
import NavbarFive from "@/components/_App/NavbarFive";
import PageBannerStyleThree from "@/components/Common/PageBanner/PageBannerStyleThree";
import FooterFour from '@/components/_App/FooterFour';
import RelatedProducts from '@/components/ProductsDetails/RelatedProducts';
import PartnerStyleFour from '@/components/Common/PartnerStyleFour';

const ProductsGrid = () => {
    return (
        <>
            <NavbarFive />

            <PageBannerStyleThree 
                pageTitle="Products Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Products Details" 
                BGImage="bg3" 
            />

            <div className="products-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="products-details-image">
                                <img src="/images/products/products-img1.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>Old West Clothing</h3>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <a href="#" className="rating-count">(3 reviews)</a>
                                </div>

                                <div className="price">
                                    <span className="old-price">$99.00</span>
                                    <span className="new-price">$69.00</span>
                                </div>

                                <p>Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit.</p>

                                <div className="products-meta">
                                    <span>SKU: <span className="sku">10</span></span>
                                    <span>Availability: <span className="in-stock">In Stock</span></span>
                                    <span>Categories: <a href="#">Bag</a></span>
                                    <span>Tag: <a href="#">Woman</a></span>
                                </div>

                                <div className="products-add-to-cart">
                                    <div className="quantities">
                                        <span className="sub-title">Qty:</span>
                                        <div className="input-counter">
                                            <input type="number" defaultValue="0" />
                                        </div>
                                    </div>

                                    <button type="submit" className="default-btn shop-color">
                                        Add to Cart <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>

                                <ul className="social-share">
                                    <li><span>Share:</span></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="products-details-tabs">
                                <div className="single-tabs-box">
                                    <h2><span>Description</span></h2>

                                    <div className="inner-box">
                                        <h3>Overview</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla.</p>
                                        <ul>
                                            <li>Instant <strong>Gbay</strong> bestseller</li>
                                            <li>Translated into 18 languages</li>
                                            <li>#1 Most Recommended Book of the year.</li>
                                            <li>A neglected project, widely dismissed, its champion written off as unhinged.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="single-tabs-box">
                                    <h2><span>Additional Information</span></h2>
                                    
                                    <div className="inner-box">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <tbody>
                                                    <tr>
                                                        <td>Handle Height</td>
                                                        <td>40-45″</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Width</td>
                                                        <td>24″</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Wheels</td>
                                                        <td>12″</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dimensions</td>
                                                        <td>10 × 10 × 10 cm</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Material</td>
                                                        <td>Iron</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-tabs-box">
                                    <h2><span>Reviews</span></h2>
                                    
                                    <div className="inner-box">
                                        <div className="products-review-comments">
                                            <div className="user-review">
                                                <img src="/images/user/user1.jpg" alt="image" />
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                    </div>
                                                </div>
                                                <span className="d-block sub-comment">James Anderson</span>
                                                <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user/user2.jpg" alt="image" />
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star'></i>
                                                        <i className='fas fa-star'></i>
                                                    </div>
                                                </div>
                                                <span className="d-block sub-comment">Sarah Taylor</span>
                                                <p>Was really easy to implement and they quickly answer my additional questions!</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user/user3.jpg" alt="image" />
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                    </div>
                                                </div>
                                                <span className="d-block sub-comment">David Warner</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>

                                            <div className="user-review">
                                                <img src="/images/user/user4.jpg" alt="image" />
                                                <div className="review-rating">
                                                    <div className="review-stars">
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star checked'></i>
                                                        <i className='fas fa-star'></i>
                                                    </div>
                                                </div>
                                                <span className="d-block sub-comment">King Kong</span>
                                                <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                            </div>
                                        </div>

                                        <div className="review-form-wrapper">
                                            <h3>Add a review</h3>
                                            <p className="comment-notes">Your email address will not be published. Required fields are marked <span>*</span></p>

                                            <form>
                                                <div className="row">
                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="rating">
                                                            <input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5"></label>
                                                            <input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4"></label>
                                                            <input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3"></label>
                                                            <input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2"></label>
                                                            <input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1"></label>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Name *" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" placeholder="Email *" />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <div className="form-group">
                                                            <textarea placeholder="Your review" className="form-control" cols="30" rows="6"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <p className="comment-form-cookies-consent">
                                                            <input type="checkbox" id="test1" />
                                                            <label htmlFor="test1">Save my name, email, and website in this browser for the next time I comment.</label>
                                                        </p>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <button type="submit">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RelatedProducts />

            <PartnerStyleFour />
            
            <FooterFour />
        </>
    )
}

export default ProductsGrid;