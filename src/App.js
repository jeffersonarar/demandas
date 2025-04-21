import Container from './components/layouts/Container';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route, Link} from  'react-router-dom'

function App() {
  return (
    <Container customClass="min-height">
      <Router>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/company">Contato</Link></li>
              <li><Link to="/contact">Empresa</Link></li>
              <li><Link to="/newproject">Novo projeto</Link></li>
            </ul>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/company' element={<Company />} />
          <Route  path='/contact' element={<Contact />} />
          <Route  path='/newproject' element={<NewProject />} />
        </Routes>

        <p>Footer</p>
      </Router>
    </Container>

  );
}

export default App;
