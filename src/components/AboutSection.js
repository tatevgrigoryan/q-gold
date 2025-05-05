import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutSection() {
    return (
        <div id="about" className="about-section py-5">
            <Container>
                <Col>
                    <h3>About Us</h3>
                    <p>We are committed to creating a better world by investing in clean technologies and sustainable resources.
                        Our mission is to lead the way in the lithium industry with innovation and responsibility.</p>
                </Col>
            </Container>
        </div>
    );
}

export default AboutSection;
