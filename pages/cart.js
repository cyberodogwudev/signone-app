import React from 'react';
import NavbarFive from "@/components/_App/NavbarFive";
import PageBannerStyleThree from "@/components/Common/PageBanner/PageBannerStyleThree";
import FooterFour from '@/components/_App/FooterFour';
import Link from 'next/link';
import PartnerStyleFour from '@/components/Common/PartnerStyleFour';

const Cart = () => {
    return (
        <>
            <NavbarFive />

            <PageBannerStyleThree 
                pageTitle="Cart" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Cart" 
                BGImage="bg3" 
            />

            <div className="cart-area ptb-100">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="cart-table-desc table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Total</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link href="/products-details">
                                                        <a>
                                                            <img src="/images/products/products-img1.jpg" alt="item" />
                                                        </a>
                                                    </Link>
                                                </td>
                                                <td className="product-name">
                                                    <Link href="/products-details">
                                                        <a>Old West Clothing</a>
                                                    </Link>
                                                </td>
                                                <td className="product-price">
                                                    <span className="unit-amount">$75.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="input-counter">
                                                        <input type="number" defaultValue="1" />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">$75.00</span>
                                                    <button type="button" className="btn remove">
                                                        <i className='bx bx-x'></i>
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link href="/products-details">
                                                        <a>
                                                            <img src="/images/products/products-img2.jpg" alt="item" />
                                                        </a>
                                                    </Link>
                                                </td>
                                                <td className="product-name">
                                                    <a href="products-details.html">Western Party Wear</a>
                                                </td>
                                                <td className="product-price">
                                                    <span className="unit-amount">$90.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="input-counter">
                                                        <input type="number" defaultValue="1" />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">$90.00</span>
                                                    <a href="cart.html" className="remove"><i className='bx bx-x'></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link href="/products-details">
                                                        <a>
                                                            <img src="/images/products/products-img3.jpg" alt="item" />
                                                        </a>
                                                    </Link>
                                                </td>
                                                <td className="product-name">
                                                    <a href="products-details.html">classNameic Western Clothing</a>
                                                </td>
                                                <td className="product-price">
                                                    <span className="unit-amount">$60.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="input-counter">
                                                        <input type="number" defaultValue="1" />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">$60.00</span>
                                                    <a href="cart.html" className="remove"><i className='bx bx-x'></i></a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="product-thumbnail">
                                                    <Link href="/products-details">
                                                        <a>
                                                            <img src="/images/products/products-img4.jpg" alt="item" />
                                                        </a>
                                                    </Link>
                                                </td>
                                                <td className="product-name">
                                                    <a href="products-details.html">Western Crochet Dresses</a>
                                                </td>
                                                <td className="product-price">
                                                    <span className="unit-amount">$50.00</span>
                                                </td>
                                                <td className="product-quantity">
                                                    <div className="input-counter">
                                                        <input type="number" defaultValue="1" />
                                                    </div>
                                                </td>
                                                <td className="product-subtotal">
                                                    <span className="subtotal-amount">$50.00</span>
                                                    <a href="cart.html" className="remove"><i className='bx bx-x'></i></a>
                                                </td>
                                            </tr>

                                            {/* Empty Row */}
                                            {/* <tr>
                                                <td colspan="5" className="text-center">
                                                    Empty
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="cart-buttons-desc">
                                    <div className="row align-items-center">
                                        <div className="col-lg-8 col-sm-8 col-md-8">
                                            <div className="shopping-coupon-code">
                                                <input type="text" className="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code" />
                                                <button type="submit">Apply Coupon</button>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-sm-4 col-md-4 text-end">
                                            <a href="#" className="default-btn">
                                                <i className='bx bx-refresh'></i> 
                                                Update Cart 
                                                <i className="fas fa-chevron-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="cart-totals-desc">
                                    <h3>Cart Totals</h3>
                                    <ul>
                                        <li>Subtotal <span>$275.00</span></li>
                                        <li>Tax <span>$10.00</span></li>
                                        <li>Total <span>$285.00</span></li>
                                        <li>Payable Total <span>$285.00</span></li>
                                    </ul>
                                    
                                    <Link href="/checkout">
                                        <a className="default-btn">
                                            Proceed to Checkout <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <PartnerStyleFour />
 
            <FooterFour />
        </>
    )
}

export default Cart;