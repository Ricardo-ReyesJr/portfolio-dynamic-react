import React from "react";
import twitter from './images/icons8-twitter.svg';
import linkedin from './images/icons8-linkedin.svg';
import github from './images/icons8-github.svg';

export default function Social() {
    return(
            <div class="text-end fixed-bottom">
            <a href="https://twitter.com/RickReyesDev" target="_blank">
                <img 
                    src={twitter}
                    alt="twitter"
                    loading="lazy"/>
            </a>
            <a href="https://www.linkedin.com/in/ricardo-reyes-dev/" target="_blank">
                <img src={linkedin}
                alt="linkedin"
                loading="lazy"/>
            </a>
            <a href="https://github.com/Ricardo-ReyesJr" target="_blank">
                <img src={github}
                alt="github"
                loading="lazy"/></a>
        </div>
    );
}