import React, {useEffect} from 'react';
import CustomNavbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import '../App.css';
import ProjectsSection from "../components/ProjectsSection";
import ExploreSection from "../components/ExploreSection";
import NewsSection from "../components/NewsSection";
import PresentationSheet from "../components/PresentationSheet";
import {useLocation} from "react-router-dom";

function App() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                const yOffset = 1000; // scroll 200px higher
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }, [hash]);


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
