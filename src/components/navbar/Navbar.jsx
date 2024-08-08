import './navbar.scss'

import { Link } from "react-router-dom";

import { RiTwitterXLine, RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark position-fixed">
                <div className="container-fluid">
                    <Link className="navbar-brand ps-5" to="/">
                        <img className="rounded mx-auto d-block" src="https://wallpapercave.com/wp/wp9927157.jpg" alt="HarshDp" width="40" height="40" />
                    </Link>
                    <Link className="navbar-brand" to="/">Harsh Saini Tech</Link>
                    <div className="collapse navbar-collapse px-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="resume">Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="px-5">
                        <Link className="icon-link px-2" to="https://github.com/sainiharshsaini">
                            <RiGithubFill color="white"/>
                        </Link>
                        <Link className="icon-link" to="https://www.linkedin.com/in/harsh-saini-158709238">
                            <RiLinkedinBoxFill color="white"/>
                        </Link>
                        <Link className="icon-link px-2" to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09">
                            <RiTwitterXLine color="white"/>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}