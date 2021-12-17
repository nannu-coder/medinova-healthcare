import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { title, img, description, id } = props.service;
    return (

        <div className="col-lg-4">
            <CardGroup className='card-item'>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 155)}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-center'>
                        <Link to={`/servicedetails/${id}`}>
                            <button className='service-btn'>Details</button>
                        </Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Service;