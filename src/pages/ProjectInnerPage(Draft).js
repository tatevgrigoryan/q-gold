import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { format } from 'date-fns';
import CustomNavbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";

const ProjectInnerPage = () => {
    const { Link } = useParams();
    const [projectItem, setProjectItem] = useState(null);


    useEffect(() => {
        const fetchProjectItem = async () => {
            try {
                const res2 = await axios.get(`http://localhost:1337/api/projects?filters[Link][$eq]=${Link}&populate=*`);
                if (res2.data && res2.data.data && res2.data.data.length > 0) {
                    const inner_item = res2.data.data[0];  // Get the first item from the response
                    const attributes = inner_item.attributes || {};

                    const projectsData = {
                        id: inner_item.id,
                        title: inner_item.Title,
                        content: inner_item.Content,
                    };
                    console.log("Rendered content:", projectItem);
                    setProjectItem(projectsData);
                } else {
                    console.error("Project item not found.");
                }
            } catch (error) {
                console.error('Error fetching specific Project item:', error.response ? error.response.data : error.message);
            }
        };

        fetchProjectItem();
    }, [Link]);


    return (
        <div>
            <CustomNavbar />
            <section className="project-inner-page">

                <section className="project-banner text-center text-white" style={{ backgroundImage: "url('/images/newas-banner.jpeg')" }}>
                    <Container>
                        {projectItem ? (
                            <>
                                <h2 className="fw-bold">{projectItem.title}</h2>
                            </>
                        ) : (
                            <h2>Loading...</h2>
                        )}
                    </Container>
                </section>
                <Container>
                    {projectItem ? (
                        <>

                            <div className="project-content" dangerouslySetInnerHTML={{ __html: projectItem.content }} /></>
                    ) : (
                        <p>Loading article...</p>
                    )}
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default ProjectInnerPage;
