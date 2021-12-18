import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img1 from '../../Images/1.png';
import img2 from '../../Images/2.png';
import img3 from '../../Images/3.png';
import img4 from '../../Images/4.png';
import img5 from '../../Images/5.png';
import './Partner.css';

const Partner = () => {
    return (
        <div>
            <Container>
                <Row className='g-5 p-img text-center'>
                    <div class="col-lg-2">
                        <img src={img1} alt="" />
                    </div>
                    <div class="col-lg-2">
                        <img src={img4} alt="" />
                    </div>
                    <div class="col-lg-2">
                        <img src={img2} alt="" />
                    </div>
                    <div class="col-lg-2">
                        <img src={img3} alt="" />
                    </div>
                    <div class="col-lg-2">
                        <img src={img5} alt="" />
                    </div>
                    <div class="col-lg-2">
                        <img src={img1} alt="" />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Partner;