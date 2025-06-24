import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";
import {useLocation} from 'react-router-dom';
import StockChart from "../components/StockChart";

const InvestorsPage = () => {


    return (
        <div>
            <CustomNavbar/>
            <section className="investor-page">
                <section className="investor-page-banner text-center text-white"
                         style={{backgroundImage: "url('/images/investor-banner.png')"}}>
                    <h2>Investors</h2>
                </section>
                <section className="investor-page-content">
                    <Container>
                        <h3 className="pt-5 mb-0">WHY INVEST IN Q-GOLD?</h3>
                        <h4 className="pb-3">A Dual-Asset Gold Platform Positioned for Significant Growth and Domestic
                            Production</h4>

                        <ul>
                            <li className="shadow-lg p-4  rouded-3 bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Transformational U.S. Gold Acquisition</b> — Q-Gold is acquiring the 1.49Moz Quartz
                                    Mountain project from Alamos Gold, who is retaining a 9.9% stake, validating the
                                    asset’s potential and aligning long-term interests.

                                </p>
                            </li>
                            <li className="shadow-lg p-4   bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>100,000m+ Historic Drilling </b> — Extensive past drilling across the project provides a
                                    de-risked foundation for resource growth and near-term development.

                                </p>
                            </li>
                            <li className="shadow-lg p-4   bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                   <b> 1.49 Moz Gold Resource </b>— 339k oz M&I @ 0.87 g/t + 1.15 Moz Inferred @ 0.91 g/t with
                                    strong oxide recoveries (65–80%) and heap-leach potential.


                                </p>
                            </li>
                            <li className="shadow-lg p-4   bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Tier-One Jurisdiction</b> — Located in a mining-friendly red county in Oregon, covering
                                    244 claims (~2,000 ha) with federal surface and mineral rights.

                                </p>
                            </li>
                            <li className="shadow-lg  p-4  bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Angel’s Camp Exploration Upside</b> — Historic intercepts of 2.85 g/t over 45.7m suggest
                                    the potential for a second major gold zone.

                                </p>
                            </li>
                            <li className="shadow-lg p-4   bg-white flex items-start gap-3">
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Permitted & Funded Ontario Drill Program</b> — 2025 diamond drilling at Mine Centre
                                    targets a high-grade NI 43‑101 resource near the historic Foley Shaft.


                                </p>
                            </li>
                        </ul>

                        <Row className=" mt-5 pt-3">
                            <Col md={9}>
                                <StockChart/>
                            </Col>
                            <Col md={3}>
                                <div className="box-company">
                                    <h4>Company Filings</h4>
                                    <p>You can find all our company filings on SEDAR+</p>
                                    <a href="https://www.sedarplus.ca/landingpage/" target="_blank">Visit SEDAR+</a>

                                </div>

                            </Col>
                        </Row>

                        <div className="investor-page-table">
                            <Row className="pb-md-5">
                                <Col md={12} style={{overflow: 'auto'}}>
                                    <img src="/images/investor-page-image.png" alt="investor-page-image"/>
                                </Col>
                            </Row>

                        </div>

                        <h4></h4>


                    </Container>


                </section>

            </section>
            <Footer/>
        </div>
    )
        ;
};

export default InvestorsPage;
