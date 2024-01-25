import React from 'react';
import Navbar from './Navbar'
import Home from './Home'
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function MainHome() {

    return (
        <>
            <Navbar />
            <Home />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Contact />
        </>
    )
}

export default MainHome