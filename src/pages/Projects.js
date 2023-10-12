import React from "react";
import dg from './images/DG Screenshot.png';
import res from './images/rr_res.png';
import sol from './images/sol.png';


export default function Projects() {
    return(
            <section className="justify-content-around">
            <h2 className="text-center mb-4 mt-4" id="projects">Projects</h2>
            <div className="projectContainer row text-center">
                <div className="projectContainer projectCard  col-md-4">
                    <a className="text-white" href="https://degenerate-games.netlify.app/" target="_blank">
                        <img className="w-50 rounded-1" src={dg} alt="Degenerate Games" loading="lazy"/>
                    </a>
                    <h3 className="mt-4 mb-2">Degenerate Games</h3>
                    <p>This website was made using the Astro framework, HTML and Tailwind.</p>
                </div>
                <div className="projectContainer projectCard col-md-4">
                    <a className="text-white" href="https://solemas-creations.netlify.app/" target="_blank">
                        <img className="w-50 rounded-1 justify-content-center" src={sol} alt="Mom and daughter business" loading="lazy"/>
                    </a>
                    <h3 className="mt-4 mb-2">Solemas Creations</h3>
                    <p>This website was made using HTML and CSS.</p>
                </div>
                <div className="projectContainer projectCard col-md-4">
                    <a className="text-white" href="https://ricardo-reyes-resume.netlify.app/" target="_blank">
                        <img className="w-50 rounded-1" src={res} alt="This is my resume using html and css" loading="lazy"/>
                    </a>
                    <h3 className="mt-4 mb-2">My Resume</h3>
                    <p>This website was made using HTML and CSS.</p>
                </div>
            </div>
        </section>
    );
}