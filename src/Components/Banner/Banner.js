import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../Images/banner6.jpg';
import banner2 from '../../Images/banner9.jpg';
import banner3 from '../../Images/banner4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid imge"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Start Up Your Health Care</h3>
                        <p>Every day is a new opportunity for you to do something for your health. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imge"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Start Up Your Health Care</h3>
                        <p>Every day is a new opportunity for you to do something for your health. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 imge"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Start Up Your Health Care</h3>
                        <p>Every day is a new opportunity for you to do something for your health. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;