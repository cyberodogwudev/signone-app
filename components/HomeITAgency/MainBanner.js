import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MainBanner = () => {

    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className="it-agency-banner-area">
                <div className="it-agency-inner-banner jarallax">
                    <div className="container">
                        <div className="it-agency-banner-content">
                            <h1>Your experts in refurbishment and fit-out of retail,</h1>
                            <p>high end residential, commercial,
                            public sector and small build projects.</p>

                            <Link href="/contact-us">
                                <a className="default-btn it-agency-color">
                                    Get Started <i className="fas fa-chevron-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>

                <div className="container">
                    <div className="banner-video-box">
                        <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720476087/SignOne/yd809xrs5xomotxsiker.jpg" alt="image" />

                       
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </>
    )
}

export default MainBanner;