import React, { memo, useEffect, useState } from 'react';
import Slider from 'react-slick';

const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const AboutPage = (): JSX.Element => {
    const [heading, setHeading] = useState([]);
    const [summary, setSummary] = useState([]);

    useEffect(() => {
        fetch('/api/about')
        .then(res => res.json())
        .then(data => {
            setHeading(data.heading);
            setSummary(data.summary);
        });
    }, []);

    return (
        <div id='main-content'>
            <h1 className='page-title'>{heading}</h1>
            <div className='page-content'>
            {
                summary.map((line, index) => (
                    <p key={index} className='self-summary'>
                        {line}
                    </p>
                ))
            }
            <div className='carousel'>
                <Slider {...sliderSettings}>
                    <div className='carousel-item'>
                        <img src='../assets/images/carousel/1.jpg' />
                    </div>
                    <div className='carousel-item'>
                        <img src='../assets/images/carousel/2.jpg' />
                    </div>
                    <div className='carousel-item'>
                        <img src='../assets/images/carousel/3.jpg' />
                    </div>
                    <div className='carousel-item'>
                        <img src='../assets/images/carousel/4.jpg' />
                    </div>
                    <div className='carousel-item'>
                        <img src='../assets/images/carousel/5.jpg' />
                    </div>
                </Slider>
            </div>
            </div>
        </div>
    );
};

export default memo(AboutPage);
