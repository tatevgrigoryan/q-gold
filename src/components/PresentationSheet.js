import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PresentationSheet() {
    return (
        <section className="journal-section text-white">
            <Container fluid className="py-5">
                <Row className="justify-content-center align-items-center text-center gy-4 flex-wrap">

                    {/* Presentation */}
                    <Col xs={12} md="auto" className="d-flex align-items-center">
                        <h3 className="mb-3">PRESENTATION</h3>
                        <i className="fas fa-arrow-circle-right d-block mb-3"></i>
                        <button onClick={() => window.open('/presentation.pdf', '_blank')} className="border-0 bg-transparent">
                            <img
                                className="img-fluid presentation"
                                src="/images/journal1.jpg"
                                alt="Presentation"
                            />
                        </button>
                    </Col>

                    {/* Divider */}
                    <Col xs="auto" className="d-none d-md-block">
                        <div className="divider mx-3"></div>
                    </Col>

                    {/* Fact Sheet */}
                    <Col xs={12} md="auto" className="d-flex align-items-center">
                        <button onClick={() => window.open('/presentation.pdf', '_blank')} className="border-0 bg-transparent">
                            <img
                                className="img-fluid factsheet"
                                src="/images/journal2.jpg"
                                alt="Fact Sheet"
                            />
                        </button>
                        <i className="fas fa-arrow-circle-left d-block mt-3"></i>
                        <h3 className="mt-3">FACT SHEET</h3>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}

export default PresentationSheet;
