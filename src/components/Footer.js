import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer text-white py-3">
            <Container className="py-5">
                <Row className="justify-content-between align-content-start footer-content">
                    <Col md={2}>
                        <img className="middle-img" src="/images/logo.jpeg" alt="image"/>
                    </Col>
                    <Col md={3}>
                        <div>
                            <h4>Address</h4>
                            Q-Gold Resources Ltd. <br/>
                            198 Davenport Road, Toronto, ON M5R 1J2
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4>Contact</h4>
                        <a href="mailto:julie.wilson@qgoldresources.com">julie.wilson@qgoldresources.com
                        </a>

                    </Col>
                    <Col md={3}>
                        <h4>Legal</h4>
                        <a href="#">Privacy Policy</a>

                    </Col>
                </Row>

                <Row className="text-center d-block pt-3">
                    © {new Date().getFullYear()} Q-Gold Resources Ltd. All rights reserved.
                </Row>

            </Container>
        </footer>
    );
}

export default Footer;
