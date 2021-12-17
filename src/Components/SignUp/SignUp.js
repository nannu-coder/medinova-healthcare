import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const SignUp = () => {
    const { githubSignIn, googleSignIn } = useAuth();

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div>
            <Container>
                <Row>
                    <div className="signin_form d-flex justify-content-center align-items-center ">
                        <div className="name_email">
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Sign Up</Form.Label>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className='input-design' type="text" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className='input-design' type="text" placeholder="Last Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control className='input-design' type="email" placeholder="Email" />
                                </Form.Group>



                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className='input-design' type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Button className='w-100 sign-btn' type="submit">
                                    Sign Up
                                </Button>
                                <div className="no_acc d-flex mt-2">
                                    <p>Already have an account?</p> <Link to='/signin'>Sign In</Link>
                                </div>
                            </Form>
                        </div>
                        {/* Login using google & Facebook */}
                    </div>
                    <div className="or mt-2">
                        <div className="or_sign d-flex justify-content-center">
                            <p>------------------------OR------------------------</p>
                        </div>
                        <div className="firebase_btn d-flex justify-content-center">
                            <div className="sin_btn">
                                <button onClick={githubSignIn} className='btn-design'>Continue With Github</button>
                                <br />
                                <button onClick={googleSignIn} className='mt-3 btn-design'> <i className="fab fa-facebook"></i> Continue With Google</button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;