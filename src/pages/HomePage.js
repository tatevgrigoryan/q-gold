import React from 'react';
import CustomNavbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import '../App.css';
import ProjectsSection from "../components/ProjectsSection";
import ExploreSection from "../components/ExploreSection";
import NewsSection from "../components/NewsSection";
import PresentationSheet from "../components/PresentationSheet";

function App() {
    return (
        <>
            <CustomNavbar/>
            <HeroSection/>
            <AboutSection/>
            <ProjectsSection/>
            <ExploreSection />
            <PresentationSheet />
            <NewsSection />
            <Footer/>
        </>
    );
}

export default App;
