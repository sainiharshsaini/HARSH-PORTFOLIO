import './footer.scss'

import { RiMailLine, RiTwitterXLine, RiGithubFill, RiLinkedinBoxFill, RiInstagramLine, RiWhatsappLine } from "@remixicon/react";

import { Link } from 'react-router-dom';

import Logo from './harshsainilogo.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-item">
                <div className="left-footer">
                    <img src={Logo} alt="HarshSainiLogo" />
                    <p>Coding the future: personalized software development services.</p>
                    <div className="email-link">
                        <RiMailLine size={25} color='black'/>
                        <Link to="singhharshsaini7@gmail.com">: singhharshsaini7@gmail.com</Link>
                    </div>
                </div>
                <div className="right-footer">
                    <div className="left-link">
                        <h4>Find me at</h4>
                        <div className="socialLink">
                            <Link to="https://www.linkedin.com/in/harsh-saini-158709238"><RiLinkedinBoxFill size={30} color='black'/> Linkedin</Link>
                            <Link to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09"><RiTwitterXLine size={30} color='black'/> Twitter</Link>
                            <Link to="https://github.com/sainiharshsaini"><RiGithubFill size={30} color='black'/> Github</Link>
                            <Link to="https://www.instagram.com/sainiharsh_18/"><RiInstagramLine size={30} color='black'/> Instagram</Link>
                            <Link to="https://wa.me/qr/4AD67ER2Z2ZRD1"><RiWhatsappLine size={30} color='black'/> WhatsApp</Link>
                        </div>
                    </div>
                    <div className="right-link">
                        <h4>Updates</h4>
                        <div className="updates">
                            <Link to="/">Blog</Link>
                            <Link to="/">FAQ</Link>
                            <Link to="/">Portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
