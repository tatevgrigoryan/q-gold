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
                         style={{backgroundImage: "url('/images/projects-banner.png')"}}>
                    <Container>
                        <h2 className="fw-bold">Quartz Mountain, Oregon</h2>
                    </Container>
                </section>
                <Container>
                    <div className="py-3">
                        <p>
                            In the advanced exploration stage, the property consists of 244 mineral claims over ~2000
                            ha. With ~100k metres of historical drilling, Alamos drilled 7k meters in 2014-2015. Quartz
                            Mountain boasts 1.5m oz in M&I and Inferred resources (~45% in oxide and transition ore). A
                            supportive local community and favourable and permitting environment make Quartz Mountain a
                            pillar of Q-Gold’s growth portfolio. The more significant upside comes from the Angel’s Camp
                            asset, 9,800 ft east from the Butte deposit.
                        </p>
                        <iframe
                            src="https://www.google.com/maps/d/embed?mid=1AI8bsEkfCFgIHB8kF02z3yTmOTBhubU&ehbc=2E312F"
                            width="700" height="480"></iframe>

                        <h3 className="mt-5">Critical components of Quartz Mine:</h3>
                        <img className="middle-img" src="/images/quartz-main-img.jpeg" alt="image"/>
                        <h4>Crone Hill</h4>
                        <img className="small-img" src="/images/table1.png" alt="image"/>
                        <h4>Quartz Butte</h4>
                        <img className="small-img" src="/images/table2.png" alt="image"/>
                        <h4>Angel’s Camp: Significant upside</h4>
                        <img className="small-img" src="/images/table3.png" alt="image"/>
                        <h4>Angel’s Camp: Significant upside</h4>
                        <table>
                            <thead>
                            <tr>
                                <th className="center" colSpan="6" >Quartz Mountain- Angel's Camp - Prellminary "in situ" Mineral Resource</th>

                            </tr>
                            <tr>
                                <th >text</th>

                                <th>text</th>
                                <th >text</th>
                                <th >text</th>
                                <th >text</th>
                                <th >text</th>
                            </tr>

                            </thead>
                            <tbody>
                            <tr>
                                <td>0.1</td>
                                <td>40,710</td>
                                <td>4.10</td>
                                <td>5,366</td>
                                <td>61,13</td>
                                <td>80,011</td>
                            </tr>
                            <tr>
                                <td>0.2</td>
                                <td>40,710</td>
                                <td>4.10</td>
                                <td>5,366</td>
                                <td>61,13</td>
                                <td>80,011</td>
                            </tr>
                            <tr>
                                <td>0.3</td>
                                <td>40,635</td>
                                <td>4.10</td>
                                <td>5,356</td>
                                <td>61,24</td>
                                <td>80,007</td>
                            </tr>
                            <tr>
                                <td>0.4</td>
                                <td>40,300</td>
                                <td>4.13</td>
                                <td>5,351</td>
                                <td>61,69</td>
                                <td>80,011</td>
                            </tr>
                            <tr>
                                <td>0.5</td>
                                <td>39,941</td>
                                <td>4.17</td>
                                <td>5,355</td>
                                <td>62,17</td>
                                <td>79,835</td>
                            </tr>
                            <tr>
                                <td>0.6</td>
                                <td>39,784</td>
                                <td>4.18</td>
                                <td>5,355</td>
                                <td>62,34</td>
                                <td>79,738</td>
                            </tr>
                            <tr>
                                <td>0.7</td>
                                <td>39,689</td>
                                <td>4.19</td>
                                <td>5,355</td>
                                <td>62,34</td>
                                <td>79,662</td>
                            </tr>
                            <tr>
                                <td>0.8</td>
                                <td>39,526</td>
                                <td>4.20</td>
                                <td>5,337</td>
                                <td>62,34</td>
                                <td>79,487</td>
                            </tr>
                            <tr>
                                <td>0.9</td>
                                <td>39,387</td>
                                <td>4.22</td>
                                <td>5,344</td>
                                <td>62,70</td>
                                <td>79,398</td>
                            </tr>
                            <tr>
                                <td>1.0</td>
                                <td>39,203</td>
                                <td>4.23</td>
                                <td>5,332</td>
                                <td>62,78</td>
                                <td>79,129</td>
                            </tr>
                            <tr>
                                <td>2.0</td>
                                <td>31,904</td>
                                <td>4.84</td>
                                <td>4,965</td>
                                <td>66,64</td>
                                <td>68,359</td>
                            </tr>
                            <tr>
                                <td>2.5</td>
                                <td>28,715</td>
                                <td>5.12</td>
                                <td>4,727</td>
                                <td>68,20</td>
                                <td>62,962</td>
                            </tr>
                            <tr>
                                <td>3.0</td>
                                <td>25,915</td>
                                <td>5.38</td>
                                <td>4,483</td>
                                <td>71,43</td>
                                <td>59,514</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>

                </Container>
            </section>
            <Footer/>
        </div>
    );
};

export default ProjectInnerPage2;
