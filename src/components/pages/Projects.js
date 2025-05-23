import Message from "../layouts/Message"
import { useLocation } from "react-router-dom"

import styles from './Project.module.css'
import LinkButton from "../layouts/LinkButton"
import Container from "../layouts/Container"
import { useState, useEffect } from "react"
import ProjectCard from "../project/ProjectCard"

function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()

    let message = ''

    if (location.state) {
        message = location.state.message
        console.log(message)
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers:{
                'Content-Type':'aplication/json',
            },
        }).then(resp => resp.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((err) => console.log(err))
    })

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"></LinkButton>
            </div>

            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                
                { projects.length > 0 &&
                    projects.map((project) => (
                       <ProjectCard 
                       id={project.id}
                       name={project.name}
                       budget={project.budget}
                       category={project.category.name}
                       key={project.id}/>
                    ))}
            </Container>
        </div>
    )
}

export default Projects