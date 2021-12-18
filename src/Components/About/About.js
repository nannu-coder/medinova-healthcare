import React from 'react';
import { Container, Row } from 'react-bootstrap';
import about from '../../Images/about.svg';
import './About.css'

const About = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-lg-6">
                        <div className="about_content">
                            <h1>We Will Properly Take Care Of Your <span>Health</span></h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore at aut illo quae aperiam itaque ipsum assumenda sunt sit, obcaecati quasi molestias, rem, quidem ad ullam consectetur. A, officiis non!</p>

                            <button className='about_btn' type="submit">Know More</button>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5">
                        <div className="about_img">
                            <img className='img-fluid' src={about} alt="" />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default About;