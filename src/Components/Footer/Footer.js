import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <div className="col-lg-4">
                        <div className="footer_fst">
                            <div className="footer_logo logo">
                                <h1>medi<span>nova</span> </h1>
                            </div>
                            <div className="footer_p">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint assumenda dicta minima temporibus tenetur unde delectus repellat quasi consequuntur facere.</p>
                            </div>
                            <div className="footer_social">
                                <p> <FontAwesomeIcon icon={faPhone} />   <span>+1 650-385-8068</span></p>

                                <p><FontAwesomeIcon icon={faEnvelope} />  <span>medinova@health.com</span></p>
                            </div>
                            <div className="footer_social_link">
                                <ul>
                                    <li>
                                        <Link to='/comingsoon'>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/comingsoon'>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/comingsoon'>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/comingsoon'>
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_quick footer_heading">
                            <h1>quick Links</h1>
                        </div>
                        <div className="links">
                            <ul>
                                <li>
                                    <Link to='/comingsoon'>
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>
                                        Mentors
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>
                                        Galleries
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>
                                        Write For Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contacts'>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/comingsoon'>
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_contact">
                            <div className="footer_heading">
                                <h1>Contact Us</h1>
                            </div>
                            <div className="footer_msg">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="E-mail" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control placeholder='Messages....' as="textarea" rows={3} />
                                    </Form.Group>
                                </Form>
                                <button className='send_btn' type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <div style={{ background: '#353A40' }} className="footer_bottm">
                <Container>
                    <Row>
                        <div className="col-lg-12">
                            <div className="footer_bottom text-center">
                                <p>Copyright &copy; 2021 All Right Reserved By <span>Medinova</span></p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;