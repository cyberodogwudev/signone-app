import React from 'react';

const PortfolioSidebar = () => {
    return (
        <>
            <div className="portfolio-details-info">
                <ul>
                    <li>
                        <i className='icon far fa-id-badge'></i>
                        <span>Client:</span>
                        <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a>
                        <br />
                        <a href="#" target="_blank">ThemeForest.com</a>
                    </li>
                    <li>
                        <i className='icon fas fa-map-marker-alt'></i>
                        <span>Location:</span>
                        New York, USA
                    </li>
                    <li>
                        <i className='icon fas fa-tag'></i>
                        <span>Technologies:</span>
                        Python, Data Science
                    </li>
                    <li>
                        <i className='icon far fa-calendar-check'></i>
                        <span>Completed:</span>
                        28 April 2020
                    </li>
                    <li>
                        <i className="icon fas fa-globe"></i>
                        <span>Website:</span>
                        <a href="https://envytheme.com/" target="_blank">EnvyTheme.com</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PortfolioSidebar;