import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Navbar />
      <Container customClass="min-height">

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />

        </Routes>

      </Container>
      <Footer />
    </Router>


  );
}

export default App;
