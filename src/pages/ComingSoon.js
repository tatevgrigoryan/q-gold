import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";
import {useLocation} from 'react-router-dom';
import {useInView} from "react-intersection-observer";

const LegalContent = () => {


    return (
        <div>
            <CustomNavbar/>
            <section className="coming-soon-page">
                <div className="container">
                    <h2 className="text-center">Coming Soon</h2>

                </div>

            </section>
            <Footer/>
        </div>
    );
};

export default LegalContent;
