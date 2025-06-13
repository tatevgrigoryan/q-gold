import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

function ProjectsSection() {
    const [projectItems, setProjectItems] = useState([]);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/api/projects?populate=image`);

                const mappedProjects = res.data.data.map((item) => {
                    return {
                        id: item.id,
                        title: item.Title, // Corrected field access
                        content: item.Content, // Corrected field access
                        imageUrl: item.image.url
                            ? `${process.env.REACT_APP_BACKEND_API_URL}${item.image.url}`
                            : '/images/default.jpg',
                        link: `/project/${item.Link}` // Use the slug for the link
                    };
                });

                setProjectItems(mappedProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section className="projects-section" id="projects">
            <div >
                <Container className="pb-3 pt-4">
                    <div ref={ref} className={`animate ${inView ? 'slide-up' : ''}`}>
                        <h3 className="mb-3">Projects</h3>
                        <Row className="justify-content-center">
                            {projectItems.length === 0 && <p>Loading projects...</p>}
                            {projectItems.map((project) => (
                                <Col key={project.id} md={4} className="mb-4">
                                    <div
                                        className="project-card"
                                        style={{
                                            backgroundImage: `url(${project.imageUrl})`,
                                        }}
                                    >
                                        <div className="overlay">
                                            <h4 className="project-title">{project.title}</h4>
                                            {project.link ? (
                                                <Link to={project.link} className="read-more-btn">
                                                    Read More <span className="arrow-icon">➔</span>
                                                </Link>
                                            ) : (
                                                <span className="read-more-btn disabled">No Link</span>
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>

                </Container>
            </div>
        </section>
    );
}

export default ProjectsSection;
