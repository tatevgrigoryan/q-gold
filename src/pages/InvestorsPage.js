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
                        <h3 className="pt-5">A Dual-Asset Gold Platform Positioned for Significant Growth and Re-Rating
                            Potential</h3>
                        <ul>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Transformational U.S. Gold Acquisition</b><br/>
                                    Q-Gold has signed an agreement to acquire 100% of the advanced-stage <b>Quartz
                                    Mountain
                                    Project</b> in Oregon — a 339,000 oz M&I, 1,147,000 oz inferred historical (non
                                    43-101
                                    compliant) gold resource with significant heap leach potential and strong
                                    development
                                    economics.
                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Tier 1 Jurisdictions – U.S. and Canada</b><br/>
                                    Projects located in mining-friendly, infrastructure-rich jurisdictions — Oregon and
                                    Ontario — offer lower permitting risk, access to skilled labor, and alignment with
                                    strategic domestic supply priorities.

                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Significant Exploration Upside</b> <br/>
                                    Both assets feature underexplored land packages with high discovery potential.
                                    Quartz Mountain includes multiple untested targets, and Mine Centre hosts mapped
                                    quartz veins, historic high-grade intercepts, and visible gold.

                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Near-Term Catalysts for Growth</b><br/>
                                    Exploration and Drill program at Mine Centre and upcoming technical work on Quartz
                                    Mountain (PEA, updated resource) offer a clear path to value creation through news
                                    flow and resource growth.
                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Clean Capital Structure & Strategic Backing</b> <br/>
                                    Tight share count and institutional alignment, including Alamos Gold’s 9.99% equity
                                    interest, provide credibility and strong shareholder support.

                                </p>
                            </li>
                            <li>
                                <img src="/images/arrow.svg" alt="arrow"/>
                                <p>
                                    <b>Clear Re-Rating Potential</b> <br/>
                                    Advancing a significant U.S. gold asset with heap leach potential provides a
                                    near-term pathway from junior explorer to <b>America’s Next Tier 1 Gold Developer.</b>

                                </p>
                            </li>
                        </ul>

                        <StockChart/>

                        <div className="investor-page-table">
                            <Row>
                                <Col md={12} style={{overflow: 'auto'}}>
                                    <table className="profile-cap-table">
                                        <thead>
                                        <tr className="no-border">
                                            <th colSpan={2}><h3>Company Profile</h3></th>
                                            <th colSpan={2}><h3>Cap Table</h3></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><b>Trading Symbols:</b></td>
                                            <td><b>TSXV</b>: <b>QGR</b> (<b>OTC</b>: Applied)</td>
                                            <td><b>Total Shares (all classes):</b></td>
                                            <td>61,659,739</td>
                                        </tr>
                                        <tr>
                                            <td><b>CUSIP:</b></td>
                                            <td>747269</td>
                                            <td><b>Options:</b></td>
                                            <td>5,150,000</td>
                                        </tr>
                                        <tr>
                                            <td><b>ISIN:</b></td>
                                            <td>CA7472694057</td>
                                            <td><b>Warrants:</b></td>
                                            <td>3,106,522</td>
                                        </tr>
                                        <tr>
                                            <td><b>Date/Place of Formation:</b></td>
                                            <td>25 Mar 1998, British Columbia, Canada</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Financial Year End:</b></td>
                                            <td>Dec 31, fixed</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Auditors:</b></td>
                                            <td>McGovern Hurley LLP</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>Transfer Agent:</b></td>
                                            <td>TSX Trust</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
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
