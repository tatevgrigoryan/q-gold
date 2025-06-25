import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {format} from 'date-fns';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";

const ProjectInnerPage = () => {


    return (
        <div>
            <CustomNavbar/>
            <section className="project-inner-page">

                <section className="project-banner text-center text-white"
                         style={{backgroundImage: "url('/images/mine-center-banner-new.png')"}}>
                    <Container>


                        <h2 className="fw-bold">Mine Centre, Ontario Canada</h2>


                    </Container>
                </section>
                <Container>
                    <div className="py-3">
                        <Row className="align-items-center mb-5">
                            <Col md={7}>
                                <img src="/images/mine-map.png" alt="map"/>
                            </Col>
                            <Col md={5}>
                                <ul>
                                    <li className="shadow-lg   bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow"/>
                                        <p>
                                            <b>High-Grade Gold-Silver System With Expansion Upside:</b> Historic
                                            production and
                                            over 15,000 metres of drilling have confirmed a robust network of steeply
                                            dipping quartz veins at Mine Centre, with open mineralization and
                                            significant potential for resource growth through step-out and infill
                                            drilling.

                                        </p>

                                    </li>
                                    <li className="shadow-lg  bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow"/>
                                        <p>
                                            <b>Tier-One Location With Infrastructure and Nearby Producers:</b> Located
                                            in a
                                            proven Ontario mining district, the project has road access, hydroelectric
                                            power, and sits between two major gold operations — Rainy River (New Gold)
                                            and Hammond Reef (Agnico Eagle).

                                        </p>
                                    </li>
                                    <li className="shadow-lg   bg-white flex items-start gap-3">
                                        <img src="/images/arrow.svg" alt="arrow"/>
                                        <p>
                                            <b> Permitted and Drill-Ready With District-Scale Potential:</b> With an
                                            exploration
                                            permit in place and targets defined, Mine Centre offers near-term drilling
                                            catalysts and long-term upside in an underexplored greenstone belt near the
                                            U.S. border.

                                        </p>
                                    </li>
                                </ul>
                            </Col>
                        </Row>

                        <p>
                            High-Grade Gold-Silver System in a Proven Ontario Mining Camp
                            The Mine Centre Project is an advanced-stage exploration asset located in a prolific and
                            underexplored greenstone belt in northwestern Ontario, 65 km from the U.S. border and 250 km
                            northwest of Thunder Bay. Centered on the historic Foley and Mackenzie mines, the project
                            hosts a robust system of high-grade, gold- and silver-bearing quartz veins with significant
                            vertical and lateral continuity.
                            Past production and over 15,000 metres of diamond drilling (2005–2012) confirmed multiple
                            spaced-out, steeply dipping gold-quartz veins across a broad system extending from surface
                            to over 120 metres depth, with mineralization remaining open at depth and along strike.
                            Historic underground development at Foley provides valuable geological control and a clear
                            opportunity to expand the known mineralized envelope with step-out and infill drilling.
                            Located in a Tier-One jurisdiction, the project benefits from road access, power
                            infrastructure, and proximity to two major gold operations: New Gold’s Rainy River Mine and
                            Agnico Eagle’s Hammond Reef Project. With district-scale potential and a permitted drill
                            program, Mine Centre offers investors exposure to near-surface high-grade gold exploration
                            with immediate re-rating potential as targets advance.


                        </p>

                        {/* <iframe
                            src="https://www.google.com/maps/d/embed?mid=1YLCMiQiVAmC0aCe_K4arNPiz1hLFMzE&ehbc=2E312F"
                            width="700" height="480"></iframe>*/}

                        <div style={{ overflowX: "auto", width: "100%" }}>
                            <table className="project-custom-table">
                                <thead>
                                <tr className="first-head">
                                    <th colSpan={4}>HIGHLIGHTS</th>

                                </tr>
                                <tr className="second-head">
                                    <th>Site</th>

                                    <th>Drill Hole</th>
                                    <th>Grade</th>
                                    <th>Length</th>
                                </tr>

                                </thead>
                                <tbody>
                                <tr>
                                    <td>Foley</td>
                                    <td>Hole Q-05-08</td>
                                    <td className="bold">53.47 g/t Au</td>
                                    <td>Over 1.5 m</td>
                                </tr>
                                <tr>
                                    <td>Foley</td>
                                    <td>Hole Q-BV-10-1</td>
                                    <td className="bold">106.7/gt Au</td>
                                    <td>Over 0.23 m</td>
                                </tr>
                                <tr>
                                    <td>Foley</td>
                                    <td>Hole Q-BV-12-06</td>
                                    <td className="bold">33.38 g/t Au</td>
                                    <td>Over 1.05 m</td>
                                </tr>
                                <tr>
                                    <td>McKenzie</td>
                                    <td>Hole QMG09-04</td>
                                    <td className="bold">11.39 g/t Au</td>
                                    <td>Over 5.5 m</td>
                                </tr>
                                <tr>
                                    <td>McKenzie</td>
                                    <td>Hole QMG09-05</td>
                                    <td className="bold">16.69 g/t Au</td>
                                    <td>Over 9.32 m</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </Container>
            </section>
            <Footer/>
        </div>
    );
};

export default ProjectInnerPage;
