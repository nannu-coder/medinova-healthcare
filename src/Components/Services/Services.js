import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./servicess.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>

            <Container>
                <Row>
                    <div className="col-lg-12">
                        <div className="heading text-center mt-5">
                            <h1>Our <span>Services</span> </h1>
                            <p>Time and health are two precious assets that we don’t recognize and appreciate until they have been depleted</p>
                        </div>
                    </div>
                    {
                        services.map((service) => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;