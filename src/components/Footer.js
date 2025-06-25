import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer text-white py-3">
            <Container className="py-5">
                <Row className="justify-content-between align-content-start footer-content">
                    <Col md={2}>
                        <a href="/"> <img className="middle-img" src="/images/logo.png" alt="image"/></a>
                    </Col>
                    <Col md={3}>
                        <div>
                            <h4>Address</h4>
                            <p> Q-Gold Resources Ltd. <br/>
                                198 Davenport Road, Toronto, ON M5R 1J2</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4>Contact</h4>
                        <a href="mailto:julie.wilson@qgoldresources.com">julie.wilson@qgoldresources.com
                        </a>

                    </Col>
                    <Col md={3}>
                        <h4>Legal</h4>
                        <a href="/legal-notice">Legal Notice</a>

                    </Col>
                </Row>

                <Row className="justify-content-between d-flex pt-3 small-txt">
                    <Col md={6}>
                        <p> © {new Date().getFullYear()} Q-Gold Resources Ltd. All rights reserved.</p>
                    </Col>
                    <Col md={6}>
                        <p className="text-right"> Powered & Protected by <a href="https://www.armadaws.com/" target="_blank">Armada Web
                            Solutions</a></p>
                    </Col>
                </Row>

            </Container>
        </footer>
    );
}

export default Footer;
