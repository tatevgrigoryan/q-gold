import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {format} from 'date-fns';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";

const ProjectInnerPage2 = () => {


    return (
        <div>
            <CustomNavbar/>
            <section className="project-inner-page">

                <section className="project-banner text-center text-white"
                         style={{backgroundImage: "url('/images/home-banner.png')"}}>
                    <Container>
                        <h2 className="fw-bold">Quartz Mountain, Oregon USA</h2>
                    </Container>
                </section>
                <Container>
                    <div className="py-3">
                        <Row className="align-items-center pb-5">
                            <Col md={6}>
                                <img  src="/images/quartz-map.png" alt="map"/>
                            </Col>
                            <Col md={6}>
                                <ul>
                                    <li className="shadow-lg   bg-white flex items-start gap-1">
                                        <img src="/images/arrow.svg" alt="arrow"/>
                                        <p>
                                           <b> 1.49 Moz Gold Resource With Strong Oxide Recovery:</b> Includes 339koz M&I @
                                            0.87 g/t and 1.15Moz Inferred @ 0.91 g/t with 65–80% oxide and transition
                                            recoveries.


                                        </p>

                                    </li>
                                    <li className="shadow-lg   bg-white flex items-start gap-1">
                                        <img src="/images/arrow.svg" alt="arrow"/>
                                        <p>
                                            <b>Advanced-Stage Project With Over 100,000 Metres Drilling:</b> Historic and
                                            recent drilling, including 7,000 metres by Alamos in 2014–15, support a
                                            large, open gold system.

                                        </p>
                                    </li>
                                    <li className="shadow-lg   bg-white flex items-start gap-1">
                                        <img src="/images/arrow.svg" alt="arrow"/>
                                        <p>
                                           <b> Favourable Permitting on Federal Land in Mining-Friendly County:</b> Located in
                                            a “red” county in Oregon with streamlined federal permitting and local
                                            stakeholder support.


                                        </p>
                                    </li>
                                    <li className="shadow-lg   bg-white flex items-start gap-1">
                                        <img src="/images/arrow.svg" alt="arrow"/>
                                        <p>
                                            <b> District-Scale Upside at Angel’s Camp and Regional Targets: </b> Angel’s Camp (2
                                            km from Butte) and other anomalies offer blue-sky potential across a 2,000
                                            ha land package.

                                        </p>
                                    </li>


                                </ul>
                            </Col>
                        </Row>

                        <p>
                            Large-Scale, Gold Asset in Oregon With Substantial Growth and Re-Rating Potential
                            Quartz Mountain is an advanced-stage gold project located in Lake County, Oregon, comprising
                            244 contiguous mineral claims (~2,000 hectares) on federally administered land. With over
                            100,000 metres of historic drilling and a current NI 43-101 resource of 1.49 Moz gold (M&I +
                            Inferred), the project presents strong oxide leach potential and scalability.
                            Alamos Gold drilled 7,000 metres between 2014–2015 and completed an internal economic study
                            indicating a 23% IRR at $1,400 gold—highlighting robust economics even at conservative
                            pricing. The resource remains open at depth and along strike. Importantly, the Angel’s Camp
                            satellite zone, located just 2 km east of the Butte deposit, offers a significant
                            second-growth center, with mineralized intercepts up to 2.85 g/t over 45.7 metres.
                            Situated in a federally managed red county, Quartz Mountain benefits from a supportive
                            permitting regime and recent precedents from companies like Paramount Gold. With drill
                            permits in progress and expansion targets defined, the project is a strategic pillar of
                            Q-Gold’s U.S. platform—offering near-term catalysts and long-term optionality in a Tier-One
                            jurisdiction.


                        </p>
                        {/* <iframe
                            src="https://www.google.com/maps/d/embed?mid=1AI8bsEkfCFgIHB8kF02z3yTmOTBhubU&ehbc=2E312F"
                            width="100%" height="480"></iframe>*/}

                        <h3 className="mt-5 pt-5">Critical components of Quartz Mountain:</h3>
                        <img className="middle-img" src="/images/quartz-image.png" alt="image"/>
                        <h5 className="pt-5">Crone Hill:</h5>
                        <h4 className="text-center pt-5">Quartz Mountain – Crone Hill – Mineral Resources<br/> Pit
                            Constrained</h4>
                        <div className="table-wrapper">
                            <table border="1" cellPadding="6" cellSpacing="0">

                                <thead>
                                <tr>
                                    <th rowSpan="2">Cut-off (g/t Au)</th>
                                    <th colSpan="3" className="text-center">Measured</th>
                                    <th colSpan="3" className="text-center">Indicated</th>
                                </tr>
                                <tr>
                                    <th>Tonnes<br/>(000's)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>(ounces)</th>
                                    <th>Tonnes<br/>(000's)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>(ounces)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0.21 (oxide + mix)</td>
                                    <td>64</td>
                                    <td>0.72</td>
                                    <td>1,477</td>
                                    <td>2,090</td>
                                    <td>0.66</td>
                                    <td>44,349</td>
                                </tr>
                                <tr>
                                    <td>0.60 (sulphide)</td>
                                    <td>47</td>
                                    <td>1.04</td>
                                    <td>1,576</td>
                                    <td>4,056</td>
                                    <td>1.01</td>
                                    <td>132,231</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td><strong>111</strong></td>
                                    <td><strong>0.86</strong></td>
                                    <td><strong>3,053</strong></td>
                                    <td><strong>6,146</strong></td>
                                    <td><strong>0.89</strong></td>
                                    <td><strong>176,580</strong></td>
                                </tr>
                                </tbody>
                                <thead>
                                <tr>
                                    <th rowSpan="2">Cut-off (g/t Au)</th>
                                    <th colSpan="3" className="text-center">Measured and Indicated</th>
                                    <th colSpan="3" className="text-center">Inferred</th>
                                </tr>
                                <tr>
                                    <th>Tonnes<br/>(000's)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>(ounces)</th>
                                    <th>Tonnes<br/>(000's)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>(ounces)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0.21 (oxide + mix)</td>
                                    <td>2,154</td>
                                    <td>0.66</td>
                                    <td>45,826</td>
                                    <td>18,431</td>
                                    <td>0.76</td>
                                    <td>449,175</td>
                                </tr>
                                <tr>
                                    <td>0.60 (sulphide)</td>
                                    <td>4,103</td>
                                    <td>1.01</td>
                                    <td>133,807</td>
                                    <td>14,331</td>
                                    <td>1.12</td>
                                    <td>514,208</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td><strong>6,257</strong></td>
                                    <td><strong>0.89</strong></td>
                                    <td><strong>179,633</strong></td>
                                    <td><strong>32,762</strong></td>
                                    <td><strong>0.92</strong></td>
                                    <td><strong>963,383</strong></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h5 className="pt-5">Quartz Butte:</h5>
                        <h4 className="text-center pt-5">Quartz Mountain – Quartz Butte – Mineral Resources<br/>Pit
                            Constrained</h4>
                        <div className="table-wrapper">
                            <table border="1" cellPadding="6" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th rowSpan="2">Cut-off (g/t Au)</th>
                                    <th colSpan="3" className="text-center">Measured</th>
                                    <th colSpan="3" className="text-center">Indicated</th>
                                </tr>
                                <tr>
                                    <th>Tonnes<br/>(000’s)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>ounces</th>
                                    <th>Tonnes<br/>(000’s)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>ounces</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0.21 (oxide+mix)</td>
                                    <td>80</td>
                                    <td>1.08</td>
                                    <td>2,780</td>
                                    <td>4,297</td>
                                    <td>0.68</td>
                                    <td>94,083</td>
                                </tr>
                                <tr>
                                    <td>0.60 (sulphide)</td>
                                    <td>23</td>
                                    <td>0.93</td>
                                    <td>689</td>
                                    <td>1,499</td>
                                    <td>1.29</td>
                                    <td>62,219</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td><strong>103</strong></td>
                                    <td><strong>1.05</strong></td>
                                    <td><strong>3,469</strong></td>
                                    <td><strong>5,796</strong></td>
                                    <td><strong>0.84</strong></td>
                                    <td><strong>156,302</strong></td>
                                </tr>
                                </tbody>
                                <thead>
                                <tr>
                                    <th rowSpan="2">Cut-off (g/t Au)</th>
                                    <th colSpan="3" className="text-center">Measured and Indicated</th>
                                    <th colSpan="3" className="text-center">Inferred</th>
                                </tr>
                                <tr>
                                    <th>Tonnes<br/>(000’s)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>ounces</th>
                                    <th>Tonnes<br/>(000’s)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>ounces</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0.21 (oxide+mix)</td>
                                    <td>4,377</td>
                                    <td>0.69</td>
                                    <td>96,863</td>
                                    <td>4,232</td>
                                    <td>0.74</td>
                                    <td>100,960</td>
                                </tr>
                                <tr>
                                    <td>0.60 (sulphide)</td>
                                    <td>1,522</td>
                                    <td>1.29</td>
                                    <td>62,908</td>
                                    <td>2,211</td>
                                    <td>1.17</td>
                                    <td>83,029</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td><strong>5,899</strong></td>
                                    <td><strong>0.84</strong></td>
                                    <td><strong>159,771</strong></td>
                                    <td><strong>6,443</strong></td>
                                    <td><strong>0.89</strong></td>
                                    <td><strong>183,989</strong></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <h5 className="py-5">Angel's Camp:</h5>
                        <img className="middle-img" src="/images/table3.png" alt="image"/>

                        <h4 className="text-center pt-5">Quartz Mountain – Angel’s Camp – Preliminary “in situ” Mineral
                            Resource</h4>
                        <div className="table-wrapper">
                            <table border="1" cellPadding="6" cellSpacing="0">
                                <thead>
                                <tr>
                                    <th>Cut-off<br/>(g/t Au)</th>
                                    <th>Tonnage<br/>(tonnes)</th>
                                    <th>Au Grade<br/>(g/t)</th>
                                    <th>Au Content<br/>ounces</th>
                                    <th>Ag Grade<br/>(g/t)</th>
                                    <th>Ag Content<br/>ounces</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>0.1</td>
                                    <td>40,710</td>
                                    <td>4.10</td>
                                    <td>5,366</td>
                                    <td>61.13</td>
                                    <td>80,011</td>
                                </tr>
                                <tr>
                                    <td>0.2</td>
                                    <td>40,710</td>
                                    <td>4.10</td>
                                    <td>5,366</td>
                                    <td>61.13</td>
                                    <td>80,011</td>
                                </tr>
                                <tr>
                                    <td>0.3</td>
                                    <td>40,635</td>
                                    <td>4.10</td>
                                    <td>5,356</td>
                                    <td>61.24</td>
                                    <td>80,007</td>
                                </tr>
                                <tr>
                                    <td>0.4</td>
                                    <td>40,300</td>
                                    <td>4.13</td>
                                    <td>5,351</td>
                                    <td>61.69</td>
                                    <td>79,931</td>
                                </tr>
                                <tr>
                                    <td>0.5</td>
                                    <td>39,941</td>
                                    <td>4.17</td>
                                    <td>5,355</td>
                                    <td>62.17</td>
                                    <td>79,835</td>
                                </tr>
                                <tr>
                                    <td>0.6</td>
                                    <td>39,784</td>
                                    <td>4.18</td>
                                    <td>5,347</td>
                                    <td>62.34</td>
                                    <td>79,738</td>
                                </tr>
                                <tr>
                                    <td>0.7</td>
                                    <td>39,689</td>
                                    <td>4.19</td>
                                    <td>5,347</td>
                                    <td>62.43</td>
                                    <td>79,662</td>
                                </tr>
                                <tr>
                                    <td>0.8</td>
                                    <td>39,526</td>
                                    <td>4.20</td>
                                    <td>5,337</td>
                                    <td>62.55</td>
                                    <td>79,487</td>
                                </tr>
                                <tr>
                                    <td>0.9</td>
                                    <td>39,387</td>
                                    <td>4.22</td>
                                    <td>5,344</td>
                                    <td>62.70</td>
                                    <td>79,398</td>
                                </tr>
                                <tr>
                                    <td>1.0</td>
                                    <td>39,203</td>
                                    <td>4.23</td>
                                    <td>5,332</td>
                                    <td>62.78</td>
                                    <td>79,129</td>
                                </tr>
                                <tr>
                                    <td>2.0</td>
                                    <td>31,904</td>
                                    <td>4.84</td>
                                    <td>4,965</td>
                                    <td>66.64</td>
                                    <td>68,356</td>
                                </tr>
                                <tr>
                                    <td>2.5</td>
                                    <td>28,715</td>
                                    <td>5.12</td>
                                    <td>4,727</td>
                                    <td>68.20</td>
                                    <td>62,962</td>
                                </tr>
                                <tr>
                                    <td>3.0</td>
                                    <td>25,915</td>
                                    <td>5.38</td>
                                    <td>4,483</td>
                                    <td>71.43</td>
                                    <td>59,514</td>
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

export default ProjectInnerPage2;
