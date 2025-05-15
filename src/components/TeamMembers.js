import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function TeamMembers() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [visibleItems, setVisibleItems] = useState([]);

    const itemRefs = useRef([]);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/team-members?populate=*');
                const mappedMembers = res.data.data.map((item) => {
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
                }).filter(Boolean);

                setTeamMembers(mappedMembers);
            } catch (error) {
                console.error('Error fetching team members:', error);
            }
        };

        fetchTeamMembers();
    }, []);

    useEffect(() => {
        if (!itemRefs.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setVisibleItems((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [teamMembers]);

    return (
        <section className="team-member-section pt-5 mt-5" id="team-member">
            <Container>
                <h3 className="mb-5">Management Team</h3>
                <Row>
                    {teamMembers.length === 0 && <p>Loading team members...</p>}
                    {teamMembers.map((member, index) => (
                        <Col
                            key={member.id}
                            md={12}
                            data-index={index}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`animate ${visibleItems.includes(index) ? 'slide-up' : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="team-item">
                                <Row>
                                    <Col md={3}>
                                        <img className="avatar" src={member.imageUrl} alt="avatar" />
                                        <h4 className="name">{member.name}</h4>
                                        <h5 className="position">{member.position}</h5>
                                    </Col>
                                    <Col md={9}>
                                        <p>{member.description}</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default TeamMembers;
