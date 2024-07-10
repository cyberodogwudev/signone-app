import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleOne from "@/components/Common/PageBanner/PageBannerStyleOne";
import Footer from '@/components/_App/Footer';

const TermsConditions = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="Terms & Conditions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Terms & Conditions" 
                BGImage="transparent-bg3" 
            />

            <div className="terms-conditions-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Gbay Terms & Conditions</h2>
                        <p>Last Updated: January 01, 2021</p>
                    </div>

                    <div className="terms-conditions-content">
                        <h3>Overview</h3>
                        <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, company name. We will collect personal identification information from Users only if they voluntarily consent such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
                        <h3>General Permission to Use and Access and Use Limitations</h3>
                        <p>This site is provided by <strong>Gbay</strong>. <strong>Gbay</strong> collects information in several ways from different parts of this site.</p>
                        <p><strong>1.</strong> Complimentary ground shipping within 1 to 7 business days<br />
                            <strong>2.</strong> In-store collection available within 1 to 7 business days<br />
                            <strong>3.</strong> Next-day and Express delivery options also available<br />
                            <strong>4.</strong> Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items<br />
                            <strong>5.</strong> See the delivery FAQs for details on shipping methods, costs and delivery times
                        </p>
                        <h3>Confidential information</h3>
                        <p><strong>Gbay</strong> accepts the following payment methods:</p>
                        <ul>
                            <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
                            <li><strong>Gbay</strong> features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
                            <li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website <a href="#" target="_blank">paypal.com</a></li>
                        </ul>
                        <h3>Linking to this Site</h3>
                        <p>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
                        <p>Last updated: December 01, 2020 at 24:00 pm</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default TermsConditions;