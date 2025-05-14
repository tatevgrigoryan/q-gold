import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsInnerPage from './pages/NewsInnerPage';
import CompanyPage from "./pages/CompanyPage";
import ContactPage from "./pages/ContactPage";
import InvestorsPage from "./pages/InvestorsPage";
import NewsPage from "./pages/NewsPage";
import ProjectInnerPage from "./pages/ProjectInnerPage";
import ProjectInnerPage2 from "./pages/ProjectInnerPage2";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news/:slug" element={<NewsInnerPage />} />
                <Route path="/project/mine-centre" element={<ProjectInnerPage />} />
                <Route path="/project/quartz-mountain" element={<ProjectInnerPage2 />} />
                <Route path="/company" element={<CompanyPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/investors" element={<InvestorsPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;
