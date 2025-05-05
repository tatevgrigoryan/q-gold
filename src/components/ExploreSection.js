import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

function ExploreCard({ title, image, link }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <Col
            ref={ref}
            md={4}
            className={`mb-4 project-card-col ${inView ? 'slide-up' : ''}`}
        >
            <div
                className="project-card"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            >
                <div className="overlay">
                    <h2 className="project-title">{title}</h2>
                    <a href={link} className="read-more-btn">
                        Read More <span className="arrow-icon">➔</span>
                    </a>
                </div>
            </div>
        </Col>
    );
}

function ExploreSection() {
    const projects = [
        {
            title: 'Vallée Lithium Project',
            image: '/images/image1.jpg',
            link: '#',
        },
        {
            title: 'Meet the Team',
            image: '/images/image1.jpg',
            link: '#',
        },
        {
            title: 'Preissac-Lacorne Project',
            image: '/images/image1.jpg',
            link: '#',
        },
    ];

    return (
        <section className="explore-section py-5" id="explore">
            <Container>
                <h3 className="py-5 pt-0">Explore</h3>
                <Row>
                    {projects.map((project, idx) => (
                        <ExploreCard
                            key={idx}
                            title={project.title}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default ExploreSection;
