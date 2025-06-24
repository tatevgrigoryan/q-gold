import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {useInView} from 'react-intersection-observer';
import {Link} from 'react-router-dom';

function ProjectsSection() {
    const [projectItems, setProjectItems] = useState([]);
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });


    return (
        <section className="projects-section pb-3" id="projects">
            <div>
                <Container className="pb-3 pt-4">
                    <div ref={ref} className={`animate ${inView ? 'slide-up' : ''}`}>
                        <h3 className="mb-3">Projects</h3>
                        <Row className="justify-content-center align-items-center">
                            <Col md={3} className="mb-3 display-md-block">
                                <ul>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Past-Producing Gold Camp</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>High-Grade Drill Targets</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Strategic Land Package</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Flow-Through Funded</strong>
                                        </p>
                                    </li>
                                </ul>

                            </Col>
                            <Col md={3} className="mb-3">
                                <div className="project-card" style={{backgroundImage: "url(/images/project1.png)"}}>
                                    <div className="overlay">
                                        <h4 className="project-title">Mine Centre, Ontario, Canada</h4>

                                        <a href="/project/mine-centre" className="read-more-btn">
                                            Read More <span className="arrow-icon">➔</span>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} className="mb-3">
                                <div className="project-card" style={{backgroundImage: "url(/images/project2.png)"}}>
                                    <div className="overlay">
                                        <h4 className="project-title">Quartz Mountain, Oregon, USA</h4>

                                        <a href="/project/quartz-mountain" className="read-more-btn">
                                            Read More <span className="arrow-icon">➔</span>
                                        </a>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3} className="mb-3 display-sm-block">
                                <ul>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Past-Producing Gold Camp</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>High-Grade Drill Targets</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Strategic Land Package</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Flow-Through Funded</strong>
                                        </p>
                                    </li>
                                </ul>

                            </Col>
                            <Col md={3} className="mb-3">
                                <ul >

                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Large, Open-Pittable Resource</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Heap Leach Starter Project</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Permitting Advantage</strong>
                                        </p>
                                    </li>
                                    <li className="shadow-lg p-3 bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow" className="mt-1"/>
                                        <p>
                                            <strong>Exploration Growth Pipeline</strong>
                                        </p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row className="justify-content-center align-items-center">
                            <Col md={5}>

                            </Col>
                            <Col md={4}>

                            </Col>
                        </Row>
                        <Row className="justify-content-center align-items-center mt-5">
                            <Col md={5}>

                            </Col>
                            <Col md={4}>

                            </Col>

                        </Row>
                    </div>

                </Container>
            </div>
        </section>
    );
}

export default ProjectsSection;
