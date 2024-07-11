import React from 'react';
import NavbarFour from "@/components/_App/NavbarThree";
import FooterThree from '@/components/_App/FooterThree';
import PageBannerStyleTwo from '@/components/Common/PageBanner/PageBannerStyleTwo';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';

const images = [
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/op1xz9m8lmrctwsyd0ot.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/jv1cpqyxszbhubdtacpg.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/dpkdipwnjpqirrzw2y9j.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/grri6fts0iyfbnsoy96i.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/h14tes4fltyitxiytn0b.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/vvnavl4pv0oa4zqccgdc.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/lmi5u2farxs3f5l6dvbj.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682973/SignOne/big-image/mlngtvsjx9bjqalimphm.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/uspjedfp2zqrysfgr6lj.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/k7uanvtzr3grv6k0yhee.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/rqcufbftvu5v8nueeyx0.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682972/SignOne/big-image/hfljmbgravh7dadf9onc.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/op1xz9m8lmrctwsyd0ot.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/jv1cpqyxszbhubdtacpg.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/dpkdipwnjpqirrzw2y9j.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/grri6fts0iyfbnsoy96i.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/h14tes4fltyitxiytn0b.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/vvnavl4pv0oa4zqccgdc.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/lmi5u2farxs3f5l6dvbj.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682973/SignOne/big-image/mlngtvsjx9bjqalimphm.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/uspjedfp2zqrysfgr6lj.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/k7uanvtzr3grv6k0yhee.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682971/SignOne/big-image/rqcufbftvu5v8nueeyx0.webp',
    'https://res.cloudinary.com/dakpe0afe/image/upload/v1720682972/SignOne/big-image/hfljmbgravh7dadf9onc.webp',
]

const Gallery2 = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
            <NavbarFour />

            <PageBannerStyleTwo 
                pageTitle="Our Gallery" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Gallery" 
                BGImage="https://res.cloudinary.com/dakpe0afe/image/upload/v1720677273/SignOne/Gallery/iyf4di6lyan8dqsklxsh.webp" 
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
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682125/SignOne/Gallery/mzcswguyfyza9wgxgxh6.png"/>
                       
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
                            <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682125/SignOne/Gallery/oymjbhrp9bornmpzorsg.png"/>
                                
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
                            <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682125/SignOne/Gallery/gomk74g0ib1e4u3caaw9.png"/>
                                
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
                            <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682125/SignOne/Gallery/j6ppazkkxgc1ditaqokb.png"/>
                                
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
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682126/SignOne/Gallery/huonguyiaqitzidavwrm.png" alt="image" />
                                
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
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682126/SignOne/Gallery/ghjgenda6yhl1ed8spmx.png" alt="image" />
                                
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
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682126/SignOne/Gallery/eojhhxafofctxgfwbdoe.png" alt="image" />
                                
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
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682126/SignOne/Gallery/rxbv1lz5napvtfnonoem.png" alt="image" />
                                
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
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682127/SignOne/Gallery/cczvtaub2tseh6jv7y31.png" alt="image" />
                                
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
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720682127/SignOne/Gallery/to5mx7kjs14igbfzbenk.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(9);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140323_164351_1-640w_copy_ddeasw.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(10);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(11);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(12);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(13);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(14);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(15);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(16);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(17);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(18);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(19);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(20);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(21);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(22);}}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <img src="https://res.cloudinary.com/dakpe0afe/image/upload/v1720683883/20140505_192711-640w_copy_cxsdxx.png" alt="image" />
                                
                                <Link href="#">
                                    <a 
                                        className="popup-image"
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(23);}}
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