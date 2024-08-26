import './portfolio.scss'

import Footer from '../footer/Footer'

export default function Portfolio() {
    return (
        <>
        <div className='portfolio'>
            <div className="portfolio-heading">
                <h1>My Portfolio</h1>
                <h2>A Blend of <span>Creativity</span> and <span>Code</span></h2>
                <p>Explore a selection of my recent projects, each one representing a unique challenge and a testament to my skills in web development. From concept to completion, I am dedicated to delivering work that exceeds expectations, drives results, and tells a story. Every project is an opportunity to learn, grow, and push my craft further.</p>
            </div>
            <br />
            <div className="projects-Link">
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/PDF_Portfolio.png/640px-PDF_Portfolio.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h3 className="card-title">TIC-TAC-TOE</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, asperiores?</p>
                        <div className="technology-use">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" />
                            <img src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="" />
                        </div>
                        <a to="/" className="btn btn-primary">VIEW PROJECT</a>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/PDF_Portfolio.png/640px-PDF_Portfolio.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h3 className="card-title">TIC-TAC-TOE</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, asperiores?</p>
                        <div className="technology-use">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" />
                            <img src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="" />
                        </div>
                        <a to="/" className="btn btn-primary">VIEW PROJECT</a>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/PDF_Portfolio.png/640px-PDF_Portfolio.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h3 className="card-title">TIC-TAC-TOE</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, asperiores?</p>
                        <div className="technology-use">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" />
                            <img src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="" />
                        </div>
                        <a to="/" className="btn btn-primary">VIEW PROJECT</a>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/PDF_Portfolio.png/640px-PDF_Portfolio.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h3 className="card-title">TIC-TAC-TOE</h3>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, asperiores?</p>
                        <div className="technology-use">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" />
                            <img src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png" alt="" />
                        </div>
                        <a to="/" className="btn btn-primary">VIEW PROJECT</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}