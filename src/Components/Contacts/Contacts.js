import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contacts.css';


const Contacts = () => {
    return (
        <div className='mt-5'>
            <div className="contact ">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        <div className="col-lg-6">
                            <Form className='text-center'>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                    <div className="col-lg-12 mt-3">
                                        <Form.Control type="email" placeholder="E-mail" />
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <Form.Control placeholder='Write Your Message' as="textarea" rows={6} />
                                    </div>
                                </Row>
                            </Form>
                            <input className='mt-3 send_btn' type="submit" value="Send" />
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contacts;