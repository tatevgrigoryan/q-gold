import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PresentationSheet() {
    return (
        <section className="journal-section text-white">
            <Container fluid className="py-5">
                <Row className="justify-content-center align-items-center text-center gy-4 flex-wrap">

                    {/* Presentation */}
                    <Col xs={12} md="auto" className="d-flex align-items-center justify-content-center">
                        <a href="/coming-soon">
                        <h3 className="mt-3 mb-3">PRESENTATION</h3>
                        </a>
                        <i className="fas fa-arrow-circle-right d-block mb-3"></i>
                        <a href="/coming-soon">
                            <img
                                className="img-fluid presentation"
                                src="/images/Q.jpg"
                                alt="Presentation"
                            />
                        </a>
                       {/* <button onClick={() => window.open('/coming-soon', '_blank')} className="border-0 bg-transparent">

                        </button>*/}
                    </Col>

                    {/* Divider */}
                    <Col xs="auto" className="d-none d-md-block">
                        <div className="divider mx-3"></div>
                    </Col>

                    {/* Fact Sheet */}
                    <Col xs={12} md="auto" className="d-flex align-items-center justify-content-center">
                        <a  href="/coming-soon">
                            <img
                                className="img-fluid factsheet"
                                src="/images/investor-facts.png"
                                alt="Fact Sheet"
                            />
                        </a>
                        <i className="fas fa-arrow-circle-left d-block mt-3"></i>
                        <a href="/coming-soon">
                        <h3 className="mt-3 mb-3">FACT SHEET</h3>
                        </a>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default PresentationSheet;
