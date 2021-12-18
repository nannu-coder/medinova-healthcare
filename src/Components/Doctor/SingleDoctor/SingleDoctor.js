import React from 'react';
import { Card } from 'react-bootstrap';
import './SingleDoctors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SingleDoctor = (props) => {
    const { img, name, type, id } = props.doctor;
    return (
        <div className="col-lg-4">
            <Card className='mt-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-center'>
                        <h1 className='doc-type'>{type}</h1>
                    </Card.Title>
                    <Card.Text className='text-center'>
                        <h4 style={{ color: '#f75d43' }}>{name}</h4>
                    </Card.Text>
                    <div className="doc-details text-center">
                        <Link to='/comingsoon'>
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>

                        <Link to='/comingsoon'>
                            <FontAwesomeIcon icon={faGithub} />
                        </Link>

                        <Link to={`/detailsdoctor/${id}`}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </Link>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleDoctor;