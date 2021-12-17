import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import './MenuBar.css';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar className='fixed-top' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='logo' href="#">MEDI<span>NOVA</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link as={NavLink} to="/home" activeStyle={{
                                fontWeight: "bold",
                                color: "#f75d43"
                            }}>Home</Nav.Link>

                            <Nav.Link as={NavLink} to="/services" activeStyle={{
                                fontWeight: "bold",
                                color: "#f75d43"
                            }} >Services</Nav.Link>

                            <Nav.Link as={NavLink} to="/doctors" activeStyle={{
                                fontWeight: "bold",
                                color: "#f75d43",
                            }}>Doctors</Nav.Link>

                            <Nav.Link as={NavLink} to="/contacts" activeStyle={{
                                fontWeight: "bold",
                                color: "#f75d43",
                            }}>Contacts</Nav.Link>

                        </Nav>

                        <Form className="d-flex">
                            {user.email ? <Button className='menu-btn' onClick={logOut}>Log Out</Button> : <Link to="/signin">
                                <Button className='menu-btn'>Sign In</Button>
                            </Link>}
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default MenuBar;