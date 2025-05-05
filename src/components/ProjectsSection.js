import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

function ProjectCard({ Title, Link, imageUrl }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <Col ref={ref} md={4} className={`mb-4 project-card-col ${inView ? 'slide-up' : ''}`}>
            <div
                className="project-card"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            >
                <div className="overlay">
                    <h2 className="project-title">{Title}</h2>
                    {Link ? (
                        <a href={Link} target="_blank" rel="noopener noreferrer" className="read-more-btn">
                            Read More <span className="arrow-icon">➔</span>
                        </a>
                    ) : (
                        <span className="read-more-btn disabled">no Link</span>
                    )}
                </div>
            </div>
        </Col>
    );
}

function ProjectsSection() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/projects?populate=image');
                setProjects(res.data.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="projects-section py-5" id="projects">
            <Container>
                <h3 className="py-5 pt-0">Projects</h3>
                <Row>
                    {projects.length === 0 && <p>Loading projects...</p>}
                    {projects.map((project) => {
                        const { id, Title, Link, image } = project;
                        const imageUrl = image?.url
                            ? `http://localhost:1337${image.url}`
                            : '/images/default.jpg';

                        return (
                            <ProjectCard
                                key={id}
                                Title={Title}
                                Link={Link}
                                imageUrl={imageUrl}
                            />
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default ProjectsSection;
