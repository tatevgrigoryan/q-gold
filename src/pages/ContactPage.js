import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";
import { useLocation } from 'react-router-dom';
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
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
            <section className="contact-page">
                <section className="contact-page-banner text-center text-white"
                         style={{backgroundImage: "url('/images/newas-banner.jpeg')"}}>
                        <h2>Contact</h2>
                </section>
                <section className="contact-page-content">
                    <Container>
                        <Row>
                            <Col md={6} className="p-2">
                                <div>
                                    <h3>GET IN TOUCH</h3>
                                    <p>You can reach us using the details below or you can use the form to send us a message.</p>
                                    <p>
                                        Consolidated Lithium Metals Inc., <br/>
                                        5 Hazelton Avenue, Suite 400, <br/>
                                        Toronto, Ontario, M5R 2E1, Canada <br/>
                                    </p>
                                    <a className="link" href="mailto:info@consolidatedlithium.com">info@consolidatedlithium.com</a>
                                </div>
                            </Col>
                            <Col md={6} className="p-2">
                                <ContactForm/>

                            </Col>
                        </Row>
                    </Container>

                </section>

            </section>
            <Footer/>
        </div>
    );
};

export default ContactPage;
