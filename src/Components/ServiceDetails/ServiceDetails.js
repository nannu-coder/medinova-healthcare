import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import { Container, Row } from 'react-bootstrap';

const ServiceDetails = () => {
    const { userId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('../servicess.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    // console.log(details);

    const serviceDetails = details?.find((detail) => detail.id == userId);
    console.log(serviceDetails?.img);
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                <div className="col-lg-12">
                    <h1 className='details_top_heading'>Word Best <span>{serviceDetails?.title}</span></h1>
                </div>
                <div className="col-lg-12">
                    <div className="detail_img">
                        <img className='img-fluid w-100' src={serviceDetails?.img} alt="" />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="details_title">
                        <h2>{serviceDetails?.title}</h2>
                        <p>{serviceDetails?.description}</p>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default ServiceDetails;