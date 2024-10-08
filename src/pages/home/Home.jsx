import './home.scss'

import Aboutme from '../../components/home-components/about-me/Aboutme';
import Skills from '../../components/home-components/skills/Skills';
// import RecentProjects from '../../components/home-components/recent-projects/Recent-projects';
import Resume from '../../components/home-components/resume/Resume';

import Footer from '../../components/footer/Footer'

import { RiArrowRightLine } from "@remixicon/react";

export default function Home() {
    return (
        <div className='home'>
            <div className="home-content">
                <div className="hero-section">
                    <h1>Hi,<br /> I'm <span>Harsh Saini</span>, <br />a Web Developer</h1>
                    <p>Crafting seamless and dynamic web experiences that bring ideas to life.</p>
                    <button>Get in Touch <RiArrowRightLine size={25}/></button>
                </div>
            </div>
            <Aboutme/>
            {/* <RecentProjects/> */}
            <Skills/>
            <Resume/>
            <Footer/>
        </div>
    )
}