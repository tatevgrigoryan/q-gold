import React, {useState, useEffect} from 'react';
import {Carousel, Col, Container, Row} from 'react-bootstrap';

const HeroSection = () => {
    return (
        <div className="hero-section" style={{backgroundImage: "url('/images/home-banner-new.png')"}}>
            <Container  className="d-flex flex-column  align-items-center h-100 text-white ">
                <Row className="justify-content-between align-content-start pt-5 ">
                    <Col md={6}>
                        <h2 className=" animate__animated animate__slideInUp">Q-Gold
                            Resources</h2>
                        <h4 className=" animate__animated animate__slideInUp">
                            America’s Next Tier 1 Gold Developer <br/>
                            A transformational Tier-One U.S. Gold Asset <br/>
                            A high Grade Canadian Past Producer
                        </h4>
                        <h6 className=" animate__animated animate__slideInUp">G-Gold Resources is advancing a dual-asset gold platform focused on
                            near-term growth and domestic gold production. With a
                            transformational U.S. acquisition in Oregon and a high-grade,
                            drill-ready project in Ontario, Q-Gold is positioned to become
                            America’s next Tier 1 gold development company.
                        </h6>
                    </Col>
                    <Col md={6}>
                        <ul className="delayed-animate-list">
                            <li>
                                <img src="/images/arrow.svg" alt="arrow" />
                                <p>
                                    U.S. Gold Acquisition <br />
                                    1.5Moz Quartz Mountain (44% IRR) with heap leach potential in pro-mining Oregon.
                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow" />
                                <p>
                                    U.S. Resource Upside <br />
                                    Angel’s Camp shows high-grade intercepts and untested anomalies.
                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow" />
                                <p>
                                    Canadian High-Grade Target <br />
                                    Past-producing Mine Centre, fully permitted for 2025 drilling.
                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow" />
                                <p>
                                    Strategic Permitting Edge <br />
                                    Federal land in red county; modeled on Grassy Mountain approval.
                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow" />
                                <p>
                                    Clear 12-Month Catalysts <br />
                                    PEA, 43-101, and drilling across both assets—all funded.
                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow" />
                                <p>
                                    Scalable Growth Path <br />
                                    Targeting 2–4Moz+ and $100M+ valuation.
                                </p>
                            </li>
                        </ul>


                    </Col>
                </Row>
            </Container>

        </div>
    );
};


export default HeroSection;
