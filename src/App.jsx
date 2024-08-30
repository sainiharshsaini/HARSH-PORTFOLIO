import Home from './pages/home/Home'
import Portfolio from './pages/portfolio/Portfolio'
import Workwithus from './pages/workwithus/Workwithus'
import Contact from "./pages/contact/Contact"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Home/> } />
      <Route exact path="portfolio" element={ <Portfolio/> } />
      <Route exact path="workwithus" element={ <Workwithus/> } />
      <Route exact path="contact" element={ <Contact/> } />
    </Routes>
  )
}

export default App