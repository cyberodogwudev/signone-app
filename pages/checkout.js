import React from 'react';
import NavbarFive from "@/components/_App/NavbarFive";
import PageBannerStyleThree from "@/components/Common/PageBanner/PageBannerStyleThree";
import FooterFour from '@/components/_App/FooterFour';
import Link from 'next/link';
import PartnerStyleFour from '@/components/Common/PartnerStyleFour';

const Checkout = () => {
    return (
        <>
            <NavbarFive />

            <PageBannerStyleThree 
                pageTitle="Checkout" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Checkout" 
                BGImage="bg3" 
            />

            <div className="checkout-area ptb-100">
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="billing-details-desc">
                                    <h3>Billing Details</h3>

                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Country <span className="required">*</span></label>
                                                <select>
                                                    <option>United Kingdom</option>
                                                    <option>China</option>
                                                    <option>Germany</option>
                                                    <option>Japan</option>
                                                    <option>United Arab Emirates</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Company Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <label>Town / City <span className="required">*</span></label>
                                                <select>
                                                    <option>Tokyo</option>
                                                    <option>Shanghai</option>
                                                    <option>São Paulo</option>
                                                    <option>Beijing</option>
                                                    <option>New York</option>
                                                    <option>Istanbul</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>State / County <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Order Notes</label>
                                                <textarea name="notes" id="notes" cols="30" rows="5" className="form-control"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <div className="order-details-desc">
                                    <h3>Your Order</h3>

                                    <ul className="order-details">
                                        <li>Subtotal <span>$268.00</span></li>
                                        <li>Discount <span>$0.00</span></li>
                                        <li>Shipping <span>$20.00</span></li>
                                        <li>Tax <span>$00.00</span></li>
                                        <li>Order Total <span>$288.00</span></li>
                                    </ul>

                                    <div className="payment-method">
                                        <p>
                                            <input type="radio" id="direct-bank-transfer" name="radio-group" defaultChecked />
                                            <label htmlFor="direct-bank-transfer">Direct Bank Transfer</label>
                                            Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                        </p>
                                    </div>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="example-checkbox" />
                                        <label className="form-check-label" htmlFor="example-checkbox">I've read and accept the <Link href="/terms-conditions"><a>Terms & Condtions</a></Link>*</label>
                                    </div>

                                    <button type="submit" className="default-btn">Place Order</button>
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

export default Checkout;