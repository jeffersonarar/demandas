import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layouts/LinkButton'

function Home(){
    return (
        <section  className={styles.home_container}>
            <h1>Bem vindo ao <span>Criador de Demandas</span></h1>
            <p>Começe a gerenciar as sua demandas</p>
            <LinkButton to="/newproject" text="Criar projetos"/>
            <img src={savings} alt="Demandas"/>
        </section>
    )
}

export default Home