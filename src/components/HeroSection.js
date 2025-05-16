import React, { useState, useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import axios from 'axios';

function HeroSection() {
    const [slides, setSlides] = useState([]);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios.get('http://localhost:1337/api/sliders?populate=image')
            .then((response) => {
                setSlides(response.data.data);
            })
            .catch((error) => {
                console.error('Error fetching hero data:', error);
            });
    }, []);

    return (
        <div className="hero-section">
            <Carousel fade activeIndex={index} onSelect={handleSelect} controls indicators interval={4000}>
                {slides.map((slide, idx) => {
                    const { title, image } = slide;
                    const imageUrl = `http://localhost:1337${image?.url}`;

                    return (
                        <Carousel.Item key={slide.id}>
                            <div
                                className="hero-slide"
                                style={{ height: '70vh', background: `url(${imageUrl}) center/cover no-repeat` }}
                            >
                                {<Container className="d-flex flex-column justify-content-center align-items-center h-100 text-white text-center">
                                    <h2 className={`animate__animated ${index === idx ? 'animate__slideInUp' : ''}`}>{title}</h2>
                                </Container>}
                            </div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default HeroSection;
