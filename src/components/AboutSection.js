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
                          className={`animate-about ${inView ? 'slide-up' : ''}`}>
                        <h3>Q-Gold Resources</h3>
                        <p>
                            <b>Q-Gold Resources</b> is a junior gold and silver mining company focused on advancing two highly
                            prolific gold projects in North America, with a clear objective of becoming a near-term gold
                            producer.
                        </p>
                        <p>
                            <b>Q-Gold Resources</b> (TSXV: QGR, OTC: QGLDF, FRA: QX9G) is a publicly traded Canada-based mineral
                            exploration company targeting high-grade gold and silver discoveries in multiple jurisdictions.
                            Q-Gold is currently exploring for gold at the past-producing Foley Gold Mine in Mine Centre,
                            Ontario and for silver at the Surupana Property in the silver-rich altiplano region of Peru.
                        </p>
                    </div>

                </Col>
            </Container>
        </div>
    );
}

export default AboutSection;
