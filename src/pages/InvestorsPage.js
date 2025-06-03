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
                        <h3 className="pt-5">Key INVESTMENT HIGHLIGHTS:</h3>
                        <ul>
                            <li>
                                <b>Transformational U.S. Acquisition:</b> Acquired from Alamos Gold, which retains a
                                9.9%
                                stake—demonstrating strategic alignment and confidence.
                            </li>
                            <li>
                                <b>Significant Resource Scale:</b> Quartz Mountain features an open pit deposit with
                                heap leach
                                potential, valued at just ~$15/oz post-financing (339K oz M&I, 1,147K oz inferred).
                            </li>
                            <li>
                                <b>Canadian Upside:</b> Past producing Mine Centre in Ontario offers high-grade,
                                drill-ready
                                targets with discovery potential.
                            </li>
                            <li>
                                <b> Advanced Stage with Strong Economics:</b> ~$20M in prior investment; 44% IRR at
                                $1,900 gold.
                            </li>
                            <li>
                                <b>Permitting Advantage:</b> Fast-track U.S. federal land pathway; Ontario drill permits
                                in
                                hand.
                            </li>
                            <li>
                                Exploration-Driven Growth: High-impact drilling planned at Angel’s Camp and Mine Centre.
                            </li>
                            <li>
                                <b>Near-Term Catalysts:</b> Upcoming resource update, PEA at current prices, and 2025
                                drilling
                                campaign.
                            </li>
                            <li>
                                <b>Attractive Valuation Potential:</b> Dual-asset platform targeting 2–4Moz+ with strong
                                re-rating opportunity.
                            </li>
                        </ul>

                        <StockChart/>

                        <div className="investor-page-table">
                            <Row>
                                <Col md={12}>
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
                                            <td><b>TSXV</b>: <b>QGR</b> (<b>OTC</b>: Applied, <b>FRA</b>: QX9G)</td>
                                            <td><b>Total Shares (all classes):</b></td>
                                            <td>61,659,739</td>
                                        </tr>
                                        <tr>
                                            <td><b>CUSIP:</b></td>
                                            <td>747269</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td><b>ISIN:</b></td>
                                            <td>CA7472694057</td>
                                            <td></td>
                                            <td></td>
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
    );
};

export default InvestorsPage;
