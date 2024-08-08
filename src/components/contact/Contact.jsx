import { Link } from 'react-router-dom';
import './contact.scss'

import { RiTwitterXLine, RiGithubFill, RiLinkedinBoxFill, RiInstagramLine, RiWhatsappLine } from "@remixicon/react";

export default function Contact() {
    return (
        <div className='contact'>
            <div className="left">
                <h1>Social Media Links</h1>
                <div className="socialLink">
                    <Link to="https://www.linkedin.com/in/harsh-saini-158709238"><RiLinkedinBoxFill/> Linkedin</Link>
                    <Link to="https://x.com/harshsaini_18?t=_zx6F5EH11KJBifgNn7TxA&s=09"><RiTwitterXLine/> Twitter</Link>
                    <Link to="https://github.com/sainiharshsaini"><RiGithubFill/> Github</Link>
                    <Link to="https://www.instagram.com/sainiharsh_18/"><RiInstagramLine/> Instagram</Link>
                    <Link to="https://wa.me/qr/4AD67ER2Z2ZRD1"><RiWhatsappLine/> WhatsApp</Link>
                </div>
            </div>
            <div className="right">
                <h1>Contact Form</h1>
                <form>
                <div className="form-group">
                        <label>Name</label>
                        <input type="text" className='form-control' placeholder='Enter name'/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Your Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}