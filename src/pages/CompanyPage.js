import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import CustomNavbar from "../components/Navbar";
import {useParams} from 'react-router-dom';
import Footer from "../components/Footer";
import TeamMembers from "../components/TeamMembers";
import {useLocation} from 'react-router-dom';
import {useInView} from "react-intersection-observer";

const CompanyPage = () => {
    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.01,
    });
    const {hash} = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {

                const y = element.getBoundingClientRect().top + window.pageYOffset;

                window.scrollTo({top: y, behavior: 'smooth'});
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
                <section ref={ref} className={` animate pt-5 ${inView ? 'slide-up' : ''}`}>
                    <Container>
                        <h3 className="pt-2">Q-Gold Resources </h3>
                        <p> <b>Q-Gold Resources</b> is a junior gold and silver mining company focused on advancing two highly prolific
                            gold projects in North America, with a clear objective of becoming a near-term gold producer.</p>

                        <p>
                            The company is actively progressing its <b>Mine Centre</b> project in Northern Ontario, a <b>past-producing
                            gold and silver district,</b> currently undergoing an advanced exploration program. This work is aimed
                            at expanding known gold-silver vein systems around the historic <b>Foley</b> and <b>Mackenzie shafts,</b> with the
                            goal of organically growing new targets across the property. Strategically located in a <b>premier
                            mining camp</b>, Mine Centre lies in close proximity to multi-million-ounce operations including <b>New
                            Gold’s Rainy River</b> and <b>Agnico Eagle’s Hammond Reef </b> projects.
                        </p>

                        <p>
                            In parallel, the company is advancing it's <b>Quartz Mountain</b> project in Oregon— <b>acquired from Alamos
                            Gold in March 2025</b> — towards feasibility and permitting. This <b>low-cost heap-leach development asset</b>
                            hosts a current resource of over <b>1.5 million ounces of gold</b> in measured, indicated, and inferred
                            resources. The project benefits from its location on <b>federal land,</b> where recent U.S. executive
                            orders have enabled a more streamlined permitting process for strategic mineral developments.
                            Drilling and environmental permitting are set to begin in 2025 to support upgrading the existing
                            resource, advancement of the project and exploring for additional ounces at the relatively untested
                            <b>Angel’s Camp.</b>
                        </p>

                        <p>
                            Q-Gold’s highly experienced management team is led by industry veterans <b>Dr. Andy Rompel</b> and <b>Stan
                            Bharti,</b> founder of <b>Forbes Manhattan,</b> a leading resource-based merchant bank behind the success of
                            multiple gold producers, including Avion Resources (Tabakoto, Mali), Desert Sun (Jacobina, Brazil),
                            and Sulliden (Shahuindo, Peru).
                            With a dual-track strategy to become a <b>gold producer in Ontario within 2 years</b> and in Oregon within
                            <b>4 years</b>, the company is currently raising up to <b>$10 million</b> in equity and royalty financing to fund
                            acquisitions, exploration, and development. A strong asset portfolio, experienced leadership, and
                            prime project locations position Q-Gold for transformational growth in the global gold sector and
                            measured focus on long-term shareholder value creation.
                        </p>

                    </Container>
                    <TeamMembers/>

                </section>

            </section>
            <Footer/>
        </div>
    );
};

export default CompanyPage;
