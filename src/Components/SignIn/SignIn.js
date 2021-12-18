import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './SignIn.css';
import useAuth from '../../Hooks/UseAuth';


const SignIn = () => {
    const { googleSignIn, githubSignIn, handleEmail, handlePass, handleSubmit } = useAuth();




    return (
        <div>
            <Container>
                <Row>
                    <div className="signin_form d-flex justify-content-center align-items-center">
                        <div className="name_email">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Sign In</Form.Label>
                                    <Form.Control className='input-design' type="email" onBlur={handleEmail} placeholder="Username Or Email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control className='input-design' type="password" onBlur={handlePass} placeholder="Password" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>
                                <Button className='w-100 sign-btn' type="submit">
                                    Sign In
                                </Button>
                                <div className="no_acc d-flex mt-2">
                                    <p>Don't have an account?</p> <Link to='/signup'>Create Account</Link>
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

export default SignIn;