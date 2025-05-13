import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsInnerPage from './pages/NewsInnerPage';
import CompanyPage from "./pages/CompanyPage";
import ContactPage from "./pages/ContactPage";
import InvestorsPage from "./pages/InvestorsPage";
import NewsPage from "./pages/NewsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news/:slug" element={<NewsInnerPage />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/investors" element={<InvestorsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
