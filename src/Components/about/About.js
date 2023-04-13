import React from 'react';
import './About.css'
import paypal from './Group 481710.png'
import last from './Group 481722.png'
import vector from './Vector.png'
import logo1 from './Group 481734.png'
import logo2 from './Group 481735.png'
import logo3 from './Group 481736.png'
import logo4 from './Group 481737.png'

const About = () => {
    return (
        <div>
            <div className="about flex flex-wrap justify-between">
                <div className="about-img">               
                    <img className='last' src={paypal}alt="" />
                    <img className='paypal' src={last}alt="" />
                </div>
                <div className="about-text">
                    <div className="payment flex justify-evenly">
                        <img className='w-10 h-10 mt-3' src={vector} alt="" />
                        <p className='mx-4 text-neutral-900'>Great! Your Payment is <br /> succesfully.</p> 
                    </div>
                    <h2>Easily control your <br /> billing & invoicing.</h2>
                    <p>Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor integer platea placerat.</p>
                </div>
            </div>
            {/* anather-section */}
            <div className="logos flex flex-wrap justify-between py-12">
                <img src={logo1}alt="" />
                <img src={logo2}alt="" />
                <img src={logo3}alt="" />
                <img src={logo4}alt="" />
            </div>
            {/* anather-section */}
            <div className="service flex justify-between flex-wrap py-12 mt-8">
                <div className="service-info p-4">
                <h2>Let’s try our service now!</h2>
                <p>Everything you need to accept card payments and <br /> grow your business anywhere on the planet.</p>
                </div>
                <div className="button p-4">
                    <button className='btn btn-sm rounded-md'>Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default About;