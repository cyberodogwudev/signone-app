import React from 'react';

const PageBannerStyleFour = ({pageTitle, homePageUrl, homePageText, activePageText, BGImage}) => {
    return (
        <>
            <div className={`page-title-area style-four ${BGImage}`}>
                <div className="container">
                    <div className="page-title-content text-start">
                        <h2>{pageTitle}</h2>
                        <ul>
                            <li><a href={homePageUrl}>{homePageText}</a></li>
                            <li>{activePageText}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageBannerStyleFour;