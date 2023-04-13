import React from 'react';
import './About.css'
import paypal from './Group 481710.png'
import last from './Group 481722.png'
import vector from './Vector.png'
import logo1 from './Group 481734.png'
import logo2 from './Group 481735.png'
import logo3 from './Group 481736.png'
import logo4 from './Group 481737.png'
import app1 from './en_badge_web_generic.jpg'
import app2 from './png-transparent-app-store-apple-google-play-apple-text-logo-mobile-phones.jpg'

const About = () => {
    return (
        <div>
            <div className="about flex flex-wrap justify-between py-12">
                <div className="about-img">               
                    <img className='last' src={paypal}alt="" />
                    <img className='paypal p-2' src={last}alt="" />
                    <div className="payment flex justify-evenly mx-2 sm:mx-52">
                        <img className='w-8 h-8 mt-3' src={vector} alt="" />
                        <p className='mx-4 text-neutral-900'>Great! Your Payment is <br /> succesfully.</p> 
                    </div>
                </div>             
                <div className="about-text p-5 sm:p-0">                
                    <h2>Easily control your <br /> billing & invoicing.</h2>
                    <p>Elit enim sed massa etiam. Mauris eu adipiscing <br /> ultrices ametodio aenean neque. Fusce ipsum orci <br /> rhoncus aliporttitor integer platea placerat.</p>
                    <div className="apps flex flex-wrap mt-6">
                        <img src={app2} alt="" />
                        <img className='mx-0 sm:mx-3 pt-2 sm:pt-0' src={app1} alt="" />
                    </div>
                </div>
            </div>

            {/* anather-section */}
            <div className="py-12">
            <div className="logos flex flex-wrap justify-between p-4 sm:p-2 ">
                <img className='py-3 sm:py-0' src={logo1}alt="" />
                <img className='py-3 sm:py-0' src={logo2}alt="" />
                <img className='py-3 sm:py-0' src={logo3}alt="" />
                <img className='py-3 sm:py-0' src={logo4}alt="" />
            </div>
            </div>
            
            {/* anather-section */}
            <div className="py-12 sm:py-24">
            <div className="service flex justify-between flex-wrap py-12  rounded-md">
                <div className="service-info p-4">
                <h2>Let’s try our service now!</h2>
                <p className='py-4'>Everything you need to accept card payments and <br /> grow your business anywhere on the planet.</p>
                </div>
                <div className="button p-4 sm:mx-16 mx-0">
                    <button className='btn btn-sm rounded-md'>Get Start</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;