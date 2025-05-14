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
                         style={{backgroundImage: "url('/images/newas-banner.jpeg')"}}>
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
                            width="640" height="480"></iframe>

                        <h3 className="mt-5">Critical components of Quartz Mine:</h3>
                        <h4>Crone Hill</h4>
                        <img className="small-img" src="/images/table1.png" alt="image"/>
                        <h4>Quartz Butte</h4>
                        <img className="small-img" src="/images/table2.png" alt="image"/>
                        <h4>Angel’s Camp: Significant upside</h4>
                        <img className="small-img" src="/images/table3.png" alt="image"/>
                    </div>

                </Container>
            </section>
            <Footer/>
        </div>
    );
};

export default ProjectInnerPage2;
