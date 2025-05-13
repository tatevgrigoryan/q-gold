import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";
import { useLocation } from 'react-router-dom';

const InvestorsPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {

                const y = element.getBoundingClientRect().top + window.pageYOffset ;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }, [hash]);


    return (
        <div>
            <CustomNavbar/>
            <section className="company-page">
                <section className="company-page-banner text-center text-white"
                         style={{backgroundImage: "url('/images/newas-banner.jpeg')"}}>
                        <h2>Investors</h2>
                </section>
                <section className="company-page-content">
                   <Container>
                       <h3 className="pt-2">INVESTMENT HIGHLIGHTS</h3>
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
