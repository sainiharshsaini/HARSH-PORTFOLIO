import './app.scss'

import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"

import Layout from './Layout.jsx';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout/>} />
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="about" element={ <About/> } />
      <Route exact path="projects" element={ <Projects/> } />
      <Route exact path="resume" element={ <Resume/> } />
      <Route exact path="contact" element={ <Contact/> } />
    </Routes>
  )
}

export default App