import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="page_error mt-5 text-center">
                        <h1 className='err_code'>404</h1>
                        <h1 className='not_found'>Page Not Found</h1>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;