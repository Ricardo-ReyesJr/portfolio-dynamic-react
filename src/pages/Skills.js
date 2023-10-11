import React from "react";
import html from './images/icons8-html5-48.svg';
import css from './images/icons8-css3-48.svg';
import js from './images/icons8-javascript-48.svg';
import astro from './images/astro.svg';
import tailwind from './images/icons8-tailwindcss.svg';
import boot from './images/icons8-bootstrap-48.svg';
import post from './images/icons8-postgresql-48.svg';
import mongo from './images/icons8-mongodb-48.svg';
import java from './images/icons8-java (1).svg';
import python from './images/icons8-python-48.svg';
import node from './images/icons8-node-js-48.svg';
import fast from './images/fastapi (1).svg';

export default function Skills() {
    return(
        <>
                <section className="mt-5 mb-8 row" id="skills">
                <h2 className="text-center">Skills</h2>
                <div className="row mt-4 mb-8">
                    <div className="col-md-6">
                        <h3 className="frontEndSkills text-center">Frond-End</h3>
                        <div className="text-center">
                            <img className="w-25" src={html} alt="html" loading="lazy"/>
                            <img className="w-25" src={css} alt="css" loading="lazy"/>
                            <img className="w-25" src={js} alt="javaScript" loading="lazy"/>
                            <img className="w-25" src={astro} alt="astro" loading="lazy"/>
                        <img className="w-25" src={tailwind} alt="tailwindcss" loading="lazy"/>
                            <img className="w-25" src={boot} alt="bootstrap" loading="lazy"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="backEndSkills text-center">Back-End</h3>
                        <div className="text-canter">
                            <img className="w-25" src={post} alt="postgresql" loading="lazy"/>
                            <img className="w-25" src={mongo} alt="mongodb" loading="lazy"/>
                            <img className="w-25" src={java} alt="java" loading="lazy"/>
                            <img className="w-25" src={python} alt="python" loading="lazy"/>
                            <img className="w-25" src={node} alt="nodeJs" loading="lazy"/>
                            <img className="w-25" src={fast} alt="fastapi" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}