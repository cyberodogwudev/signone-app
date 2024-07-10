import React from 'react';

const Process = () => {
    return (
        <>
            <div className="process-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">HOW IT WORKS</span>
                        <h2>We Have The Main Process to Run The Marketing</h2>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process1.png" alt="image" />
                                <h3>Marketing Plan</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process2.png" alt="image" />
                                <h3>Marketing Execution</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-process-box">
                                <img src="/images/process/process3.png" alt="image" />
                                <h3>Growth & Scale</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process;