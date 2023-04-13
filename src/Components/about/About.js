import React from 'react';
import './About.css'
import paypal from './Group 481710.png'
import last from './Group 481722.png'

const About = () => {
    return (
        <div>
            <div className="about flex flex-wrap justify-between">
                <div className="about-img">               
                    <img className='last' src={paypal}alt="" />
                    <img className='paypal' src={last}alt="" />
                </div>
                <div className="about-text">
                    <h2>Easily control your <br /> billing & invoicing.</h2>
                    <p>Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor integer platea placerat.</p>
                </div>
            </div>
        </div>
    );
};

export default About;