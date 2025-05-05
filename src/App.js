import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsInnerPage from './pages/NewsInnerPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news/:slug" element={<NewsInnerPage />} />
            </Routes>
        </Router>
    );
}

export default App;
