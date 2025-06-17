import React, { useEffect } from 'react';
import { Container, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

function AboutSection() {

    const sectionId = 'about'; // match your ID here
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });


    return (
        <div id="about" className="about-section py-5">
            <Container>
                <Col

                >
                    <div  ref={ref}
                          className={`animate-about slide-up`}>
                        <h3>HIGHLIGHTS</h3>
                        <h4>A Dual-Asset Gold Platform Positioned For Significant Growth And Re-Rating Potential</h4>
                        <ul className="delayed-animate-list space-y-4">
                            <li className="shadow-lg p-4  bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow" className="mt-1" />
                                <p>
                                    <strong>U.S. Gold Acquisition</strong> <br />
                                    1.5Moz Quartz Mountain (44% IRR) with heap leach potential in pro-mining Oregon.
                                </p>
                            </li>
                            <li className="shadow-lg p-4  bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow" className="mt-1" />
                                <p>
                                    <strong>U.S. Resource Upside</strong> <br />
                                    Angel’s Camp shows high-grade intercepts and untested anomalies.
                                </p>
                            </li>
                            <li className="shadow-lg p-4  bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow" className="mt-1" />
                                <p>
                                    <strong>Canadian High-Grade Target</strong> <br />
                                    Past-producing Mine Centre, fully permitted for 2025 drilling.
                                </p>
                            </li>
                            <li className="shadow-lg p-4  bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow" className="mt-1" />
                                <p>
                                    <strong>Strategic Permitting Edge</strong> <br />
                                    Federal land in red county; modeled on Grassy Mountain approval.
                                </p>
                            </li>
                            <li className="shadow-lg p-4  bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow" className="mt-1" />
                                <p>
                                    <strong>Clear 12-Month Catalysts</strong> <br />
                                    PEA, 43-101, and drilling across both assets—all funded.
                                </p>
                            </li>
                            <li className="shadow-lg p-4  bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow" className="mt-1" />
                                <p>
                                    <strong>Scalable Growth Path</strong> <br />
                                    Targeting 2–4Moz+ and $100M+ valuation.
                                </p>
                            </li>
                        </ul>

                    </div>

                </Col>
            </Container>
        </div>
    );
}

export default AboutSection;
