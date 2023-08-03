import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { projects } from '../../data/projects'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const time = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(time)
        }
    }, [])
    // console.log(projects[0].image);

    const renderProjects = (projects) => {
        return (
            <div className="images-container">
                {
                    projects.map((project, idx) => {
                        return (
                            <div key={idx} className="image-box">
                                <img
                                    src={project.image}
                                    alt="project img"
                                    className="project-image"
                                />
                                <div className="content">
                                    <p className="title">{project.name}</p>
                                    <h4 className="description">{project.description}</h4>
                                    <p className="tech-used">{project.tech.map((t, id) => {
                                        return (
                                            <span key={id}>#{t} </span>
                                        )
                                    })}</p>
                                    <button className="btn" onClick={() => window.open(project.deployed_app_link, '_blank')}>View Site</button>
                                    <button className="btn" onClick={() => window.open(project.source_code_link, '_blank')}>View Code</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className="container projects-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArr={'Projects'.split('')}
                        idx={15}
                    />
                </h1>
                <div>{renderProjects(projects)}</div>
            </div>
            <Loader type='pacman' />
        </>

    )
}

export default Projects;