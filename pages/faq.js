import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleFour from "@/components/Common/PageBanner/PageBannerStyleFour"; 
import FaqsContent from '@/components/Common/FaqsContent';
import Footer from '@/components/_App/Footer';

const AboutClassic = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleFour 
                pageTitle="Frequently Asked Questions" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
                BGImage="bg1" 
            />

            <FaqsContent />
 
            <Footer />
        </>
    )
}

export default AboutClassic;