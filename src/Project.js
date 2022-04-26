import React from 'react'
import MyToDoList from './images/MyToDoList.png'
import JavaScriptQuiz from './images/JavaScriptQuiz.png'
import PrettySunny from './images/PrettySunny.png'
import AsiaExplorer from './images/AsiaExplorer.png'

const Project = () => {
    const projectArr = [
        {
            title: 'My ToDo List',
            img: MyToDoList,
            link: 'https://www.google.com',
        },
        {
            title: 'JavaScript Quiz',
            img: JavaScriptQuiz,
            link: 'https://www.google.com',
        },
        {
            title: 'JavaScript Quiz',
            img: PrettySunny,
            link: 'https://www.google.com',
        },
        {
            title: 'JavaScript Quiz',
            img: AsiaExplorer,
            link: 'https://www.google.com',
        },
    ]

    return (
        <div>
            <h2 className='title'>Projects</h2>
            <div className='project-holder'>
                {projectArr.map((project, index) => {
                    return (
                        <div className='project'>
                            <img
                                className='project-img'
                                src={project.img}
                                alt={project.title}
                            />
                            <h4 className='project-title'>{project.title}</h4>
                            <a className="project-link"  href={project.link}>
                                LIVE
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Project
