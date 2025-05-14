import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function ProjectsSection() {
    const [projectItems, setProjectItems] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {


                const res = await axios.get('http://localhost:1337/api/projects?populate=image');

                const mappedProjects = res.data.data.map((item) => {

                    return {

                        id: item.id,
                        title: item.Title, // Corrected field access
                        content: item.Content, // Corrected field access
                        imageUrl: item.image.url
                            ? `http://localhost:1337${item.image.url}`
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
        <section className="projects-section py-5" id="projects">
            <Container>
                <h3 className="mb-5">Projects</h3>
                <Row>
                    {projectItems.length === 0 && (
                        <p>Loading projects...</p>
                    )}
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
                                        <a href={project.link}  rel="noopener noreferrer" className="read-more-btn">
                                            Read More <span className="arrow-icon">➔</span>
                                        </a>
                                    ) : (
                                        <span className="read-more-btn disabled">No Link</span>
                                    )}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default ProjectsSection;
