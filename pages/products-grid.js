import React from 'react';
import NavbarFive from "@/components/_App/NavbarFive";
import PageBannerStyleThree from "@/components/Common/PageBanner/PageBannerStyleThree";
import Link from 'next/link';
import PartnerStyleFour from '@/components/Common/PartnerStyleFour';
import FooterFour from '@/components/_App/FooterFour';

const ProductsGrid = () => {
    return (
        <>
            <NavbarFive />

            <PageBannerStyleThree 
                pageTitle="Products Grid" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Products Grid" 
                BGImage="bg3" 
            />

            <div className="products-area ptb-100">
                <div className="container">
                    <div className="noke-grid-sorting row align-items-center">
                        <div className="col-lg-6 col-md-6 result-count">
                            <p>We found <span className="count">6</span> products available for you</p>
                        </div>

                        <div className="col-lg-6 col-md-6 ordering">
                            <div className="select-box">
                                <label>Sort By:</label>
                                <select>
                                    <option>Default</option>
                                    <option>Popularity</option>
                                    <option>Latest</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img1.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Old West Clothing</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$75.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img2.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="new">New</div>
                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Western Party Wear</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$90.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img3.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>classNameic Western Clothing</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$60.00</span>
                                        <span className="old-price">$99.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img4.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="sale">Sale!</div>
                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Western Crochet Dresses</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$50.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img5.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Long Slim Trousers</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$75.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img6.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="new">New</div>
                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Western Women Skirt</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$90.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img7.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Man's Pant</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$60.00</span>
                                        <span className="old-price">$99.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img8.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="sale">Sale!</div>
                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Man's Short Pants</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$50.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img9.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Short Pants</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$75.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img10.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="new">New</div>
                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Men's Casual outfits clothing</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$90.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img11.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Blue Skirt</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$60.00</span>
                                        <span className="old-price">$99.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="image">
                                    <Link href="/products-details">
                                        <a className="d-block">
                                            <img src="/images/products/products-img12.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="sale">Sale!</div>
                                    <ul className="buttons-list">
                                        <li>
                                            <Link href="/cart">
                                                <a>
                                                    <i className="fas fa-shopping-cart"></i>
                                                    <span className="tooltip-label">Add to Cart</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="far fa-heart"></i>
                                                <span className="tooltip-label">Add to Wishlist</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="/products-details">
                                            <a>Baby's Blue Pant</a>
                                        </Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div className="price">
                                        <span className="new-price">$50.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="next page-numbers"><i className="fas fa-chevron-left"></i></a>
                                <a href="#" className="page-numbers current" aria-current="page">1</a>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers"><i className="fas fa-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PartnerStyleFour />
 
            <FooterFour />
        </>
    )
}

export default ProductsGrid;