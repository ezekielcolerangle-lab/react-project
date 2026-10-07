import { useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import Fooster from './components/Fooster.jsx'
import './App.css'
import Home from './page/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import EducationPage from './pages/EducationPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ReactProject from './pages/ReactProject.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import SkillDetail from './pages/SkillDetail.jsx'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="wordmark" to="/" aria-label="Ezekiel Colerangle, home" onClick={closeMenu}>
          <span className="wordmark-mark">EC</span>
          <span>Ezekiel Colerangle</span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" end onClick={closeMenu}>About Me</NavLink>
          <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink
            to="/projects"
            end
            className={({ isActive }) => (isActive || pathname === '/react-project' ? 'active' : undefined)}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink to="/education" end onClick={closeMenu}>Education</NavLink>
          <NavLink className="nav-contact" to="/contact" end onClick={closeMenu}>Contact <span aria-hidden="true">↗</span></NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/react-project" element={<ReactProject />} />
        <Route path="/skills/:skillId" element={<SkillDetail />} />
      </Routes> 
      <Fooster />
    </div>
  )
}

export default App