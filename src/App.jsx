import './App.css'
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import NavBar from './components/NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, AboutMe, ContactMe, Projects } from './pages'
import Footer from './components/Footer';

function App() {

  return (
    <HashRouter>
      <NavBar />
      <section className="wrapper">
        <div id="stars"></div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
