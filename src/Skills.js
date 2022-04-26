import React from 'react'

const Skills = () => {
    const skillsArr = ['JavaScript', 'HTML', 'CSS', 'Reactjs', 'Git']

    const skills = skillsArr.map((skill, index) => {
        return <li className='skill' key={index}>{skill}</li>
    })
    return (
        <div className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>{skills}</div>
        </div>
    )
}

export default Skills
