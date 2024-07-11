import React from 'react';
import Link from 'next/link';

const FeaturesCard = () => {
    return (
        <>
        
            <div className="features-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">

                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-it-services-box bg-6d5fff">
                                <i className="icon flaticon-web-development"></i>
                                <h3>
                                    <Link href="/services-details">
                                        <a>Project Management</a>
                                    </Link>
                                </h3>
                                <p>Our Project Manager will work alongside you from the early stages. In carrying-out site visits during the acquisition stage,
                                liaising with Developers and Landlords.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-it-services-box bg-ff9f07">
                                <i className="icon flaticon-development-3"></i> 
                                <h3>
                                    <Link href="/services-details">
                                        <a>Design and Planning</a>
                                    </Link>
                                </h3>
                                <p>Is your proposed project feasible under permitted development?  Do you need planning permission?
                                Chances are, that if you have looked into it and found that it requires planning...
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesCard;