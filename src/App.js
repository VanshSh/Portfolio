import './styles.css'
import About from './About'
import Navigation from './Navigation'
import Skills from './Skills'
import Project from './Project'
import Footer from './Footer'
import React from 'react'

const App = () => {
    return (
        <React.Fragment>
            <Navigation />
            <About />
            <Skills />
            <Project />
            <Footer />
        </React.Fragment>
    )
}

export default App
