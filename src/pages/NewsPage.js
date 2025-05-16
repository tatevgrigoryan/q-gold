import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { format } from 'date-fns';
import CustomNavbar from "../components/Navbar";
import Footer from "../components/Footer";

function NewsPage() {
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/news?sort=createdAt:desc&populate=*');
                const mappedNews = res.data.data.map((item) => {
                    console.log(item);
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
        <div  id="news">
            <CustomNavbar/>
            <section className="news-page-banner text-center text-white"
                     style={{backgroundImage: "url('/images/banner3.png')"}}>
                <h2>News</h2>
            </section>
            <section className="news-section py-5">
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
            <Footer/>
        </div>

    );
}

export default NewsPage;
