import React, {useEffect} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import {useInView} from 'react-intersection-observer';

function AboutSection() {

    const sectionId = 'about'; // match your ID here
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });


    return (
        <div id="about" className="about-section py-5">
            <Container>
                <Col

                >
                    <div ref={ref}
                         className={`animate-about slide-up`}>
                        <h3>HIGHLIGHTS</h3>
                        <h4>A Dual-Asset Gold Platform Positioned For Significant Growth And Domestic Production</h4>
                        <Row>
                            <Col md={6}>
                                <ul className="delayed-animate-list space-y-4">
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <b>Transformational U.S. Gold Acquisition</b> — Q-Gold is acquiring the 1.49Moz
                                            Quartz Mountain project from Alamos Gold, who is retaining a 9.9% stake,
                                            validating the asset’s potential and aligning long-term interests.

                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <b>100,000m+ Historic Drilling</b> — Extensive past drilling across the project
                                            provides a de-risked foundation for resource growth and near-term
                                            development.

                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <b>1.49 Moz Gold Resource</b> — 339k oz M&I @ 0.87 g/t + 1.15 Moz Inferred @ 0.91
                                            g/t with strong oxide recoveries (65–80%) and heap-leach potential.

                                        </p>
                                    </li>
                                </ul>

                            </Col>
                            <Col md={6}>
                                <ul className="delayed-animate-list space-y-4">

                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                           <b>  Tier-One Jurisdiction</b> — Located in a mining-friendly red county in Oregon,
                                            covering 244 claims (~2,000 ha) with federal surface and mineral rights.

                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <b>Angel’s Camp Exploration Upside</b> — Historic intercepts of 2.85 g/t over 45.7m
                                            suggest the potential for a second major gold zone.

                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                           <b> Permitted & Funded Ontario Drill Program</b> — 2025 diamond drilling at Mine
                                            Centre targets a high-grade NI 43‑101 resource near the historic Foley
                                            Shaft.
                                        </p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>


                    </div>

                </Col>
            </Container>
        </div>
    );
}

export default AboutSection;
