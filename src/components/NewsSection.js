import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { format } from 'date-fns';

function NewsSection() {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/news?sort=createdAt:desc&pagination[limit]=3&populate=*');

                // Log the response to check the structure
                console.log(res.data.data);

                // Map over the news data and access attributes correctly
                const mappedNews = res.data.data.map((item) => {
                    console.log(item); // Log each item to check the structure
                    return {
                        id: item.id,
                        title: item.Title, // Corrected field access
                        content: item.Content, // Corrected field access
                        date: format(new Date(item.createdAt), 'MMMM dd, yyyy'), // Corrected field access
                        category: item.CategoryName || "News", // Corrected field access
                        link: `/news/${item.id}` // Use the slug for the link
                    };
                });

                setNewsItems(mappedNews);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <section className="news-section py-5" id="news">
            <Container>
                <h3 className="mb-5">Latest News</h3>
                <Row>
                    {newsItems.length === 0 && (
                        <p>Loading latest news...</p>
                    )}
                    {newsItems.map((news, idx) => (
                        <Col key={idx} md={4} className="mb-4">
                            <div className="news-card">
                                <div className="news-card-body">
                                    <span className="news-category">{news.category}</span>
                                    <h4 className="news-title">{news.title}</h4>
                                    <p className="news-date">{news.date}</p>
                                    <a href={news.link} className="read-more-btn">
                                        Read More <span className="arrow-icon">➔</span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default NewsSection;
