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
                         style={{backgroundImage: "url('/images/newas-banner.jpeg')"}}>
                    <Container>


                        <h2 className="fw-bold">Mine Centre, Ontario</h2>


                    </Container>
                </section>
                <Container>
                    <div className="py-3">
                        <p>Advanced exploration project in premier mining district in Mine Centre, Ontario, with past
                            producing gold and silver mine with exploration program in place to organically grow
                            targets. Expand known gold and silver veins of the historic production sites at Foley and
                            Mackenzie shafts. Previous diamond drilling between 2005-2012 established the Foley Gold
                            Mine as a large deposit of spaced-out gold-bearing veins with an excellent picture of the
                            mine’s gold potential from surface to the 122 m level. Located in premier mining camp in
                            close proximity to multi-million ounce gold and silver projects operated by New Gold (Rainy
                            River) and Agnico Eagle (Hammond reef) with favourable logistics and immediate access 250 km
                            NW of Thunder Bay, and 65 km NE of the US border.
                        </p>
                        <iframe
                            src="https://www.google.com/maps/d/embed?mid=1YLCMiQiVAmC0aCe_K4arNPiz1hLFMzE&ehbc=2E312F"
                            width="700" height="480"></iframe>

                        <table>
                            <thead>
                            <tr>
                                <th >Site</th>

                                <th>Drill Hole</th>
                                <th >Grade</th>
                                <th >Length</th>
                            </tr>

                            </thead>
                            <tbody>
                            <tr>
                                <td>Foley</td>
                                <td>Hole Q-05-08 </td>
                                <td>53.47 g/t Au</td>
                                <td>Over 1.5 m</td>
                            </tr>
                            <tr>
                                <td>Foley</td>
                                <td>Hole Q-BV-10-1</td>
                                <td>106.7/gt Au</td>
                                <td>Over 0.23 m</td>
                            </tr>
                            <tr>
                                <td>Foley</td>
                                <td>Hole Q-BV-12-06</td>
                                <td>33.38 g/t Au</td>
                                <td>Over 1.05 m</td>
                            </tr>
                            <tr>
                                <td>McKenzie</td>
                                <td>Hole QMG09-04</td>
                                <td>11.39 g/t Au</td>
                                <td>Over 5.5 m</td>
                            </tr>
                            <tr>
                                <td>McKenzie</td>
                                <td>Hole QMG09-05</td>
                                <td>16.69 g/t Au</td>
                                <td>Over 9.32 m</td>
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

export default ProjectInnerPage;
