import React from 'react';
import AboutImage from "../assests/about.jpg";
import "../styles/About.css"

function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{ backgroundImage: `url(${AboutImage})` }}></div>
            <div className='aboutBottom'>
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Voluptate, ratione quos culpa ex praesentium dolorem
                      atque consequatur, illo doloremque labore voluptates
                       non facilis accusamus? Nulla, ad maiores similique 
                       quae corporis consectetur possimus incidunt quos nam 
                       dolore sunt illo quisquam odit nobis, consequatur vero
                        iusto, a voluptatibus excepturi ullam sapiente fugit.
                         Unde quia facere vel.
                </p>

            </div>

        </div>
    );
}

export default About;
