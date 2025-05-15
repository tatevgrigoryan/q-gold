import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";
import { useLocation } from 'react-router-dom';

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
                       <h3 className="pt-5">INVESTMENT HIGHLIGHTS</h3>
                       <p>Content Here...</p>

                       <h4>OVERVIEW</h4>



                   </Container>


                </section>

            </section>
            <Footer/>
        </div>
    );
};

export default InvestorsPage;
