
import ProjectForm from '../project/ProjectForm'
import styles from './Newproject.module.css'

import { useNavigate  } from 'react-router-dom'

function NewProject() {

    const history = useNavigate()


    function createPost(project){

        // initialize cost and services

        project.cost = 0
        project.services = []


        fetch("http://localhost:5000/projects",{
            method : 'POST',
            hearders : {
                'Content-type':'aplication/json'
            },
            body: JSON.stringify()
        }).then(
            resp => resp.json()
        ).then((data) =>{
            console.log(data)
            history.push('/', "Projeto criado com Sucesso!")
        }).catch(err => console.log(err))
    }



    return (
        <div className={styles.newproject_container}>
            <h1>NewProject</h1>
            <p>Crie seu projeto para depois adicionar os seus serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject