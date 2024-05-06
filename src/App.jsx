import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home, About, Projects, Contact, Blog } from './pages'
import Navbar from './components/Navbar'
import { skills, education, projects } from './constants'

const App = () => {
  return (
    <main className = "bg-slate-300/20 h-full">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/about" element={ <About 
                  skills = {skills}
                  education = {education}
                />} />
                <Route path="/projects" element={ <Projects 
                  projects = {projects}
                />} />
                <Route path="/blog" element={ <Blog />} />
                <Route path="/contact" element={ <Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App