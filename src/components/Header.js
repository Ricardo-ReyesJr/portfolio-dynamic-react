import React from 'react';

export default function Header() {
    return(
        <>
            <header>
                <div className="container">
                    <nav className="navbar navbar-expand-sm justify-content-around">
                        <h1 className="">Ricardo Reyes</h1>
                        <button 
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        className="navbar-toggler"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end align-content-end" id="navbarNav">
                            <ul className="navbar-nav justify-content-evenly align-items-end">
                                <li><a href="#home" className="nav-link">Home</a></li>
                                <li><a href="#skills" className="nav-link">Skills</a></li>
                                <li><a href="#projects" className="nav-link">Projects</a></li>
                                <li><a href="#about" className="nav-link">About Me</a></li>
                                <li><a href="#contact" className="nav-link">Contact Me</a></li>
                                <li><a href="https://ricardo-reyes-resume.netlify.app/" className="nav-link" target="_blank">Resume</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}