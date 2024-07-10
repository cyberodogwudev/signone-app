import React from 'react';
import Navbar from "@/components/_App/Navbar";
import PageBannerStyleOne from "@/components/Common/PageBanner/PageBannerStyleOne";
import AboutContent from '@/components/AboutSimple/AboutContent';
import ServicesCard from '@/components/AboutSimple/ServicesCard';
import FunFactsOne from '@/components/Common/FunFactsOne';
import TeamStyleOne from '@/components/Common/TeamStyleOne';
import TestimonialStyleOne from '@/components/Common/TestimonialStyleOne';
import Partner from '@/components/Common/Partner';
import CTAArea from '@/components/Common/CTAArea';
import Footer from '@/components/_App/Footer';

const AboutSimple = () => {
    return (
        <>
            <Navbar />

            <PageBannerStyleOne 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
                BGImage="transparent-bg1" 
            />

            <AboutContent />

            <ServicesCard />

            <FunFactsOne />

            <TeamStyleOne />

            <TestimonialStyleOne />

            <div className="bg-f9f9f9">
                <Partner />
            </div>

            <CTAArea />
 
            <Footer />
        </>
    )
}

export default AboutSimple;