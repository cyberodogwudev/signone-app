import React from 'react';
import Link from 'next/link';

const AdvisorySolutions = () => {
    return (
        <>
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="services-details-content">
                                <h2>Start Up Advisory Solutions Development</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="services-details-video">
                                <iframe src="https://player.vimeo.com/video/176909027" allow="autoplay; fullscreen" allowFullScreen=""></iframe>

                                <Link href="/contact">
                                    <a className="default-btn">
                                        Contact Us <i className="fas fa-chevron-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdvisorySolutions;