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
                         style={{backgroundImage: "url('/images/company-banner-new.png')"}}>
                    <h2>Company</h2>
                </section>
                <section ref={ref} className={` animate pt-5 ${inView ? 'slide-up' : ''}`}>
                    <Container>
                        <h3 className="pt-2">Q-Gold Resources </h3>
                        <p>
                            <b> Q-Gold Resources Ltd.</b> is a North American gold exploration and development company
                            advancing a
                            dual-asset platform in Tier 1 jurisdictions. With a high-grade, drill-ready project in
                            Ontario
                            and a pending, transformational acquisition in Oregon, Q-Gold is strategically positioned
                            for
                            near-term growth and long-term value creation. </p>
                        <p> In the United States, Q-Gold has signed a definitive agreement to acquire a <b>100% interest
                            in the
                            Quartz Mountain Gold Project,</b> an advanced-stage asset with over 100,000 metres of
                            historical
                            drilling and demonstrated heap leach potential. The project hosts a historical resource
                            of <b>~1.5
                                million ounces of gold,</b> including <b>339,000 oz (M&I) at 0.87 g/t Au</b> and <b>1.14
                                Moz (Inferred) at
                                0.91 g/t Au, </b> based on the most recent estimate by Alamos Gold. With multiple
                            untested targets
                            across a large, underexplored land package, <b>Quartz Mountain offers exceptional
                                exploration
                                upside</b> and potential for significant resource growth.</p>

                        <p>
                            In Canada, Q-Gold holds a significant land position at <b>Mine Centre, Ontario,</b> anchored by the
                            historically productive Foley Mine. The project features high-grade gold intercepts, mapped
                            quartz vein systems, and a fully permitted drill program targeting near-surface resource
                            expansion.
                        </p>
                        <p>
                            Led by a proven management team and advancing projects in two of the world’s most
                            mining-friendly jurisdictions,<b> Q-Gold is on track to become America’s Next Tier 1 Gold
                            Developer.</b>
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
