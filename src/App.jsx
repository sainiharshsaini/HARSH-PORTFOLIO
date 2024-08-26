import Home from './components/home/Home'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Workwithus from './components/workwithus/Workwithus'
import Contact from "./components/contact/Contact"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="services" element={ <Services/> } />
      <Route exact path="portfolio" element={ <Portfolio/> } />
      <Route exact path="workwithus" element={ <Workwithus/> } />
      <Route exact path="contact" element={ <Contact/> } />
    </Routes>
  )
}

export default App