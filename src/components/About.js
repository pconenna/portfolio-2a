import React from 'react';
import '../App.css';
import pic from '../images/headshot2023.png'
function About(){
    return (
        <section className="about-me" id='about'>
        <h2>About Me</h2>
        <section className="desc">
            <img id="face" src={pic} alt=""></img>
            <p id="intro">My name is Peter Conenna. I have a bachelor's degree in IT from Depaul University.
                I am a student in Northwestern University's SPS full stack coding bootcamp.
                I would consider myself an aspiring full stack web developer. </p>
            <p>View and download my resume <a href='https://docs.google.com/document/d/1JviH35cMUQXjcMWvtZF7j8Trn3y4-9yJ1990ZR0dlDc/edit?usp=sharing'>here</a>.</p>
        </section>
    </section>
    )
}
export default About;