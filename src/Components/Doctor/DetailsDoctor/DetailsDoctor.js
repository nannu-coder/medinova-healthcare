import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './DetailsDoctor.css';

const DetailsDoctor = (props) => {
    const { id } = useParams();
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('../team.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    const doctorDetails = doctors.find(doctor => doctor?.id == id);

    return (
        <div className='doc-details'>
            <Container>
                <Row>
                    <div className="col-lg-6">
                        <div className="doc_img">
                            <img className='img-fluid' src={doctorDetails?.img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Row className='g-2'>
                            <div class="col-lg-4">
                                <h3>Name</h3>
                                <h3>Citations </h3>
                                <h3>H-Index</h3>
                                <h3>Specialist</h3>
                                <h3>Nationality</h3>
                                <h3>Education</h3>
                            </div>
                            <div className="col-lg-1">
                                <h3>:</h3>
                                <h3>:</h3>
                                <h3>:</h3>
                                <h3>:</h3>
                                <h3>:</h3>
                                <h3>:</h3>
                            </div>
                            <div class="col-lg-7">
                                <h3>{doctorDetails?.name}</h3>
                                <h3>{doctorDetails?.Citations}</h3>
                                <h3>{doctorDetails?.hIndex}</h3>
                                <h3>{doctorDetails?.type}</h3>
                                <h3>{doctorDetails?.nationality}</h3>
                                <h3>{doctorDetails?.education}</h3>
                            </div>
                        </Row>



                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default DetailsDoctor;