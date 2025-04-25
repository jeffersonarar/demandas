
import ProjectForm from '../project/ProjectForm'
import styles from './Newproject.module.css'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>NewProject</h1>
            <p>Crie seu projeto para depois adicionar os seus serviços</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
    )
}

export default NewProject