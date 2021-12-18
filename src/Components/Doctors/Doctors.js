import React from 'react';
import './Doctors.css';
import { useEffect, useState } from 'react';
import SingleDoctor from '../Doctor/SingleDoctor/SingleDoctor';
import { Container, Row } from 'react-bootstrap';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./team.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <div className="doctors_heading heading text-center">
                        <h1>Our <span>Doctors</span></h1>
                        <p>Our Team always ready to support and help our clients! We are always in contact with clients to listen to their requirements and fulfilled them in the best way.</p>
                    </div>
                    {
                        doctors.slice(0, 6).map((doctor) => <SingleDoctor
                            key={doctor.id}
                            doctor={doctor}
                        ></SingleDoctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;