import React from 'react';
import NavbarFour from "@/components/_App/NavbarThree";
import FooterThree from '@/components/_App/FooterThree';
import PageBannerStyleTwo from '@/components/Common/PageBanner/PageBannerStyleTwo';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

const images = [
    '/images/gallery/gallery-img1.jpg',
    '/images/gallery/gallery-img2.jpg',
    '/images/gallery/gallery-img3.jpg',
    '/images/gallery/gallery-img4.jpg',
    '/images/gallery/gallery-img5.jpg',
    '/images/gallery/gallery-img6.jpg',
    '/images/gallery/gallery-img7.jpg',
    '/images/gallery/gallery-img8.jpg',
    '/images/gallery/gallery-img9.jpg',
]

const Gallery2 = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
            <NavbarFour />

            <PageBannerStyleTwo 
                pageTitle="Gallery Three Column" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Gallery" 
                BGImage="bg4" 
            />

            <div className="gallery-area pt-100 pb-70">
                <div className="container">
                    <div className="row">

                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => setIsOpenImage(false)}
                                onMovePrevRequest={() =>
                                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                }
                                onMoveNextRequest={() =>
                                    setPhotoIndex((photoIndex + 1) % images.length)
                                }
                            />
                        )}

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img1.jpg" alt="image" />
                       
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img2.jpg" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img3.jpg" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img4.jpg" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img5.jpg" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img6.jpg" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img7.jpg" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img8.jpg" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="/images/gallery/gallery-img9.jpg" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <FooterThree />
        </>
    )
}

export default Gallery2;