import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useLocation} from "react-router-dom";

function AboutSection() {
    const { hash } = useLocation();


    useEffect(() => {
        if (!hash) return;


        setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
                const yOffset = -100; // scroll 100px higher
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 0);
    }, [hash]);

    return (

        <div id="about" className="about-section py-5">
            <Container>
                <Col>
                    <h3>About Us</h3>
                    <p>
                        Q-Gold Resources is a junior gold and silver mining company focused on advancing two highly
                        prolific gold projects in North America, with a clear objective of becoming a near-term gold
                        producer. <br/><br/>
                        The company is actively progressing its <b>Mine Centre</b> project in Northern Ontario, a
                         <b> past-producing gold and silver district</b>, currently undergoing an advanced exploration program.
                        This work is aimed at expanding known gold-silver vein systems around the historic Foley and
                        Mackenzie shafts, with the goal of organically growing new targets across the property.
                        Strategically located in a premier mining camp, <b>Mine Centre</b> lies in close proximity to
                        multi-million-ounce operations including New Gold’s Rainy River and Agnico Eagle’s Hammond Reef
                        projects.<br/><br/>
                        In parallel, the company is advancing it's <b>Quartz Mountain</b> project in Oregon—<b>acquired from
                        Alamos Gold in March 2025</b> — towards feasibility and permitting. This low-cost heap-leach
                        development asset hosts a current resource of over <b>1.5 million ounces of gold</b> in measured,
                        indicated, and inferred resources. The project benefits from its location on <b>federal land</b>, where
                        recent U.S. executive orders have enabled a more streamlined permitting process for strategic
                        mineral developments. Drilling and environmental permitting are set to begin in 2025 to support
                        upgrading the existing resource, advancement of the project and exploring for additional ounces
                        at the relatively untested <b>Angel’s Camp.</b><br/><br/>
                        Q-Gold’s highly experienced management team is led by industry veterans <b>Dr. Andy Rompel</b> and <b>Stan
                        Bharti</b>, founder of Forbes Manhattan, a leading resource-based merchant bank behind the success
                        of multiple gold producers, including Avion Resources (Tabakoto, Mali), Desert Sun (Jacobina,
                        Brazil), and Sulliden (Shahuindo, Peru).<br/>
                        With a dual-track strategy to become a <b>gold producer in Ontario within 2 years</b> and in Oregon
                        within <b>4 years</b>, the company is currently raising up to <b>$10 million</b> in equity and royalty
                        financing to fund acquisitions, exploration, and development.
                        A strong asset portfolio, experienced leadership, and prime project locations position Q-Gold
                        for transformational growth in the global gold sector and measured focus on long-term
                        shareholder value creation.

                    </p>
                </Col>
            </Container>
        </div>
    );
}

export default AboutSection;
