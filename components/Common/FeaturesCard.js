import React from 'react';

const FeaturesCard = () => {
    return (
        <>
            <div className="features-area bg-1b2232 ptb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="single-features-item color-white startup-color">
                                <i className="icon flaticon-analytics-1"></i>
                                <h3>Advanced <br /> Analytics</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="single-features-item color-white startup-color">
                                <i className="icon flaticon-innovation-1"></i>
                                <h3>Business <br /> Innovation</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="single-features-item color-white startup-color">
                                <i className="icon flaticon-growth-1"></i>
                                <h3>Growth <br /> Consulting</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="single-features-item color-white startup-color">
                                <i className="icon flaticon-consultation"></i>
                                <h3>Sales <br /> Consulting</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesCard;