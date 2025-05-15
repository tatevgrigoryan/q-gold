import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import {useInView} from "react-intersection-observer";

function TeamMembers() {
    const [teamMembers, setTeamMembers] = useState([]);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/team-members?populate=*');

                const mappedMembers = res.data.data.map((item) => {
                    // Check if 'attributes' exists, or fallback to direct properties
                    const { attributes, Name, Position, Description, image } = item;

                    const name = attributes ? attributes.Name : Name;
                    const position = attributes ? attributes.Position : Position;
                    const description = attributes ? attributes.Description : Description;

                    const imageUrl = image?.url
                        ? `http://localhost:1337${image.url}`
                        : '/images/default.jpg';

                    return {
                        id: item.id,
                        name,
                        position,
                        description,
                        imageUrl
                    };
                }).filter(Boolean); // Filter out any null items if attributes are missing

                setTeamMembers(mappedMembers);
            } catch (error) {
                console.error('Error fetching team members:', error);
            }
        };

        fetchTeamMembers();
    }, []);

    return (
        <section ref={ref} className="team-member-section py-5"  id="team-member">
            <Container ref={ref} className={`animate  ${inView ? 'slide-up' : ''}`} >
                <h3 className="mb-5">Management Team</h3>
                <Row>
                    {teamMembers.length === 0 && (
                        <p>Loading team members...</p>
                    )}
                    {teamMembers.map((member) => (
                        <Col key={member.id} md={4} className="mb-4" >
                            <div className="team-item">
                                <img className="avatar" src={member.imageUrl} alt="avatar" />
                                <h4 className="name">{member.name}</h4>
                                <h5 className="position">{member.position}</h5>
                                <p>{member.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </section>
    );
}

export default TeamMembers;
