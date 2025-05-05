import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { format } from 'date-fns';
import CustomNavbar from "../components/Navbar";
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";

const NewsInnerPage = () => {
    const { slug } = useParams(); // Use slug instead of id
    const [newsItem, setNewsItem] = useState(null);
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        const fetchNewsItem = async () => {
            try {
                const res2 = await axios.get(`http://localhost:1337/api/news?filters[id][$eq]=${slug}&populate=*`);
                if (res2.data && res2.data.data && res2.data.data.length > 0) {
                    const inner_item = res2.data.data[0];  // Get the first item from the response
                    const attributes = inner_item.attributes || {};

                    const newsData = {
                        id: inner_item.id,
                        title: inner_item.Title,
                        content: inner_item.Content,
                        date: format(new Date(inner_item.createdAt), 'MMMM dd, yyyy'),
                        category: inner_item.CategoryName || "News",
                    };
                    console.log("Rendered content:", newsItem);
                    setNewsItem(newsData);  // Set the specific news item
                } else {
                    console.error("News item not found.");
                }
            } catch (error) {
                console.error('Error fetching specific news item:', error.response ? error.response.data : error.message);
            }
        };

        fetchNewsItem();
    }, [slug]);  // Depend on `slug` so it will re-fetch if the URL changes

    useEffect(() => {
        const fetchLatestNews = async () => {
            try {
                const res = await axios.get('http://localhost:1337/api/news?sort=createdAt:desc&pagination[limit]=4&populate=*');
                if (res.data && res.data.data) {
                    const latest = res.data.data.map(item => {
                        const attr = item.attributes || {};
                        return {
                            id: item.id,
                            title: item.Title,
                            date: format(new Date(item.createdAt), 'MMMM dd, yyyy'),
                            category: item.category || "News",
                            link: `/news/${item.id}`,
                        };
                    });
                    setLatestNews(latest);
                }
            } catch (error) {
                console.error('Error fetching latest news:', error.response ? error.response.data : error.message);
            }
        };

        fetchLatestNews();
    }, []);

    return (
        <div>
            <CustomNavbar />
            <section className="news-inner-page">
                <section className="news-banner text-center text-white">
                    <Container>
                        {newsItem ? (
                            <>
                                <h2 className="fw-bold">{newsItem.title}</h2>
                                <p className="mt-3">{newsItem.date}</p>
                            </>
                        ) : (
                            <h2>Loading...</h2>
                        )}
                    </Container>
                </section>
                <Container>
                    <Row>
                        <Col md={8} className="news-inner-wrapper">
                            {newsItem ? (
                                <>
                                    <p className="text-muted">{newsItem.date} | {newsItem.category}</p>
                                    <div className="news-content" dangerouslySetInnerHTML={{ __html: newsItem.content }} /></>
                            ) : (
                                <p>Loading article...</p>
                            )}
                        </Col>
                        <Col md={4} className="news-inner-latest-wrapper">
                            <div className="latest-news-sidebar">
                                <h3 className="mb-4">Latest News</h3>
                              {  <ul className="list-unstyled">
                                    {latestNews.map((news, idx) => (
                                        <li key={idx} className="mb-5">
                                            <h4 className="text-muted">{news.title}</h4>
                                            <p>{news.date} | {news.category}</p>
                                            <a href={news.id} className="read-more-btn">
                                                Read More <span className="arrow-icon">➔</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default NewsInnerPage;
