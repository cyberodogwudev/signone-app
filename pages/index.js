import React from 'react';
import NavbarThree from "@/components/_App/NavbarThree";
import MainBanner from '@/components/HomeITAgency/MainBanner';
import FeaturesCard from '@/components/HomeITAgency/FeaturesCard';
import OurStoryContent from '@/components/HomeITAgency/OurStoryContent';
import OurITServices from '@/components/HomeITAgency/OurITServices';
import FunFactsThree from '@/components/Common/FunFactsThree';
import TeamStyleThree from '@/components/Common/TeamStyleThree';
import TestimonialStyleThree from '@/components/Common/TestimonialStyleThree';
import CallToAction from '@/components/Common/CallToAction';
import LatestBlogPostStyleThree from '@/components/Common/LatestBlogPostStyleThree';
import PartnerStyleTwo from '@/components/Common/PartnerStyleTwo';
import FooterThree from '@/components/_App/FooterThree';
 
const Index = () => {
    return (
        <>  
            {/* Top Header imported in the NavbarITAgency Component */}
            <NavbarThree />

            <MainBanner />

            <FeaturesCard />

            <OurStoryContent />

            <OurITServices />

            <FunFactsThree />

            <TeamStyleThree />

            <TestimonialStyleThree />

            <CallToAction />

            <LatestBlogPostStyleThree />

            <PartnerStyleTwo />
            
            <FooterThree />
        </>
    )
}

export default Index;