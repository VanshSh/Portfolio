import React from 'react'
import Hero from './images/Hero.svg'

const About = () => {
    return (
        <header>
            <h2 className='title'>About</h2>

            <div className='about-item'>
                <p className='about-text'>
                    I am a full stack developer with a passion for creating
                    beautiful, responsive, and intuitive user interfaces. I have
                    a background in graphic design and web development, and I am
                    currently pursuing a degree in computer science.
                </p>
                <img className='about-img' src={Hero} alt='hero' />
            </div>
        </header>
    )
}

export default About
