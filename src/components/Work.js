/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../App.css';

import bol2 from '../images/bol2.PNG';
import mm from '../images/mm_demo.PNG';
import pt from '../images/playtrade.PNG';

function Work(){
    return (
        <div className='container text-center'>
            <div className='row m-3'>
                <div className='col-lg-6 col-sm-12'>
                    <figure id="bol">
                    <img src={bol2}/>
                    <figcaption className="bol-title">barksoflove.org</figcaption> 
                    </figure>
                </div>
                <div className='col-lg-6 col-sm-12'>Website for all operations of Barks of Love Animal Rescue. 
                <a href="https://barksoflove.org/index.html"> Visit the production application.</a>
                <p>This is a Weebly site there is no GitHub repo.</p>
                </div>
            </div>

            <div className='row m-3'>
            <div className='col-lg-6 col-sm-12'>
                <figure className="bottom-fig">
                <img src={mm}/> 
                <figcaption className="title">Movie Mixers</figcaption>
                </figure> 
                </div>
            <div className='col-lg-6 col-sm-12'>Movie Mixers . Search for a movie and recieve a mixed drink reccomendation based on the movie's genre.
            <br/><a href="https://github.com/pconenna/movie-mixers">Visit the GitHub Repo.</a>
            <br/><a href="https://project01team02.github.io/movie-mixers/index.html">Visit the production application.</a>
            </div>
            </div>

            <div className='row m-3'>
                <div className='col-lg-6 col-sm-12'>
                <figure className="bottom-fig">
                <img src={pt}/>
                <figcaption className="title">Playtrade</figcaption>
                </figure>
                </div>
                <div className='col-lg-6 col-sm-12'>Curate a stock portfolio and learn about the stock market. 
                <br/> <a href="https://github.com/pconenna/Play-Trade">Visit the GitHub Repo.</a>
                <br/> <a href="https://play-trade-3e0a6365bb54.herokuapp.com/">Visit the production application.</a></div>
            </div>
            <div className='row m-3'>These are just the higlights of my projects. Visit my GitHub page to view everything I have ever worked on.</div>
        </div>
        
    )
}
export default Work;