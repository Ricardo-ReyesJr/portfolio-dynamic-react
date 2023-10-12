import React from "react";
import rick from './images/rick.jpeg';

export default function About() {
    return(
        <>
            <section className="mt-4 ml-4 row justify-content-around" id="about">
            <img className="rickPicture w-25 mt-4 col-md-6" src={rick} alt="picture of rick" loading="lazy" />
            <div className="bio col-md-6">
                <h2 className="text-center">About Me</h2>
                <p className="bioText">
                    Hi there, I'm Ricardo Reyes, I am a full stack software engineer.
                    Please take a look around, and see what I have been up to, let's see what we can build
                    together.
                </p>
                <p>
                    Solving problems and providing elegant, innovative and accessible solutions is a passion of mine. I am always thinking about
                    code this passion often leads me to solving my coding problems, while gaming, playing music, family time or grilling. I'll
                    figure out the answer and rush to my computer. I'm passionate about coding, passionate about new technologies, and passionate about software engineering
                    who will do what ever it takes to find an answer.
                </p>
                <p>
                    I made my personal portfolio website using HTML, CSS, Bootstrap, and React.
                </p>
            </div>
        </section>
        </>
    );
}