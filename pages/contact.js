import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from '@/components/_App/Footer';
import GoogleMap from '@/components/Contact/GoogleMap';
import ContactFormStyleOne from '@/components/Contact/ContactFormStyleOne';

const Contact = () => {
    return (
        <>
            <Navbar />
            <GoogleMap />
            <ContactFormStyleOne />
            <Footer />
        </>
    )
}

export default Contact;