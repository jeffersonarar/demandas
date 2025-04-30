import {BrowserRouter as Router, Routes, Route, Link} from  'react-router-dom'

import styles from './Navbar.module.css' 
import logo from '../../img/costs_logo.png'
import Container from './Container'


function Navbar(){

    return (
        <nav className={styles.navbar}>
            <Container>
            <Link to="/">
                    <img src={logo} alt='Demandas'/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                <li className={styles.item}><Link to="/company">Contato</Link></li>
                <li className={styles.item}><Link to="/contact">Empresa</Link></li>
                <li className={styles.item}><Link to="/newproject">Novo projeto</Link></li>
            </ul>
            </Container>
        </nav>
   
    )
}

export default Navbar