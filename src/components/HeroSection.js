import React, { useEffect, useRef } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

const HeroSection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.6; // Slows down the video to 50% speed
        }
    }, []);

    return (
        <div className="hero-section">
            <div className="video-container">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="background-video"
                >
                    <source src="/images/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="content-overlay">
                    <Container className="d-flex flex-column align-items-center h-100 text-white">
                        <Row className="justify-content-between align-content-start pt-5">
                            <Col md={7}>
                                <h2 className="animate__animated animate__slideInUp">
                                    Advancing America's Next Tier-One <span className="gold">Gold Developer</span>
                                </h2>

                                <h6 className="animate__animated animate__slideInUp pt-md-5">
                                    Q-Gold Resources is advancing a dual-asset gold platform focused on near-term growth and
                                    domestic gold production. With a transformational U.S. acquisition in Oregon and a
                                    high-grade, drill-ready project in Ontario, Q-Gold is positioned to become America’s next
                                    Tier 1 gold development company.
                                </h6>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
