import Home from "./components/home/Home"
import About from "./components/about/About.jsx"
import Projects from "./components/projects/Projects"
import Resume from "./components/resume/Resume"
import Contact from "./components/contact/Contact"

export default function Layout() {
    return (
        <>
        <Home/>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
        </>
    )
}
