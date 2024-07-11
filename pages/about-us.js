import React from 'react';
import NavbarFive from "@/components/_App/NavbarThree";
import PageBannerStyleThree from "@/components/Common/PageBanner/PageBannerStyleThree";
import AboutContent from '@/components/AboutUs/AboutContent';
import FeaturesCard from '@/components/Common/FeaturesCard';
import AdvisorySolutions from '@/components/AboutUs/AdvisorySolutions';
import CallToActionStyleTwo from '@/components/Common/CallToActionStyleTwo';
import FunFactsFour from '@/components/Common/FunFactsFour';
import TeamStyleTwo from '@/components/Common/TeamStyleTwo';
import TestimonialStyleThree from '@/components/Common/TestimonialStyleThree';
import PartnerStyleThree from '@/components/Common/PartnerStyleThree';
import FooterFour from '@/components/_App/FooterThree';

const AboutClassic = () => {
    return (
        <>
            <NavbarFive />

            <PageBannerStyleThree 
                pageTitle="About Us" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About Us" 
                BGImage="bg1" 
            />

            <AboutContent />
 
            <FeaturesCard />

            <AdvisorySolutions />

            <CallToActionStyleTwo />

      

          

          

            <TestimonialStyleThree />

            <PartnerStyleThree />
 
            <FooterFour />
        </>
    )
}

export default AboutClassic;