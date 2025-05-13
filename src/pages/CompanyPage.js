import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";
import { useLocation } from 'react-router-dom';

const CompanyPage = () => {
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
                        <h2>Company</h2>
                </section>
                <section className="company-page-content">
                   <Container>
                       <h3 className="pt-2">CONSOLIDATED LITHIUM METALS </h3>
                       <p>
                           Consolidated Lithium Metals is a Canadian junior mining exploration company trading under the
                           symbols CLM on the TSX Venture, JORFF on the OTCQB and Z36 on the Frankfurt and Stuttgart Stock
                           Exchanges. The Company is focused on the acquisition, exploration, production, and development
                           of mining properties prospective for lithium mineralization.
                       </p>

                       <h4>OVERVIEW</h4>

                       <p>
                           Secure North American Lithium supplies are national policy priorities for the USA and Canada and
                           a core goal under the US Inflation Reduction Act. Lithium demand is forecast to increase 6-fold
                           by 2035 due to EV adoption. CLM is focused on exploration in mining-friendly Quebec for hard
                           rock spodumene lithium in the heart of the Abitibi Greenstone Belt.
                       </p>

                       <h4>HIGHLIGHTS</h4>


                       <ul>
                           <li>CLM has over 18,000 m of drilling approved for expanding known lithium mineralization in
                               2023.
                           </li>
                           <li>Drill-ready targets with confirmed lithium-bearing pegmatite already identified on two
                               flagship projects, Vallée and Baillargé
                           </li>
                           <li>CLM’S Baillargé Project has three known pegmatite systems defined at surface that need
                               significant drilling to determine their potential
                           </li>
                           <li >CLM’s Vallée JV borders the recently restarted North American Lithium Operation owned by
                               Sayona Mining, our JV partner. The Vallée JV has drill-confirmed lithium-bearing pegmatites
                               believed to be the extension of Sayona’s mineable pegmatites. CLM’s pegmatites remain open
                               for expansion.
                           </li>

                       </ul>

                   </Container>
                    <TeamMembers />

                </section>

            </section>
            <Footer/>
        </div>
    );
};

export default CompanyPage;
