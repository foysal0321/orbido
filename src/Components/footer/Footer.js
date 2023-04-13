import React from 'react';
import './Footer.css'
import logo from '../navbar/logo.png'
import name from './Group 481751.png'
//import instra from ''
import facebook from './Group (2).png'
import twiter from './Group (3).png'
import linkid from './Vector.png'


const Footer = () => {
    return (
        <div>
            <div className="footer-main flex flex-wrap justify-between py-12 p-5 sm:p-0">
                <div className="footer1">
                    <h2 className='flex'>
                        <img src={logo} alt="" />
                        <img className='h-6 mt-2' src={name} alt="" />
                    </h2><br />
                    <p>A new way to make the payments <br /> easy, reliable and secure.</p>
                </div>
                <div className="footer2 mt-6 sm:mt-0 grid">
                    <h2 className='font-bold'>Usefull Links</h2> <br />
                    <a className='py-2' href="">Content</a> 
                    <a className='py-2' href="">How it Works</a> 
                    <a className='py-2' href="">Create</a> 
                    <a className='py-2' href="">Explore</a> 
                    <a className='py-1' href="">Terms & Services</a>
                </div>
                <div className="footer3 mt-6 sm:mt-0 grid">
                    <h2 className='font-bold'>Community</h2> <br />
                    <a className='py-2' href="">Help Center</a> 
                    <a className='py-2' href="">Partners</a> 
                    <a className='py-2' href="">Suggestions</a>
                    <a className='py-2' href="">Blog</a>
                    <a className='py-2' href="">Newsletters</a>
                </div>
                <div className="footer4 mt-6 sm:mt-0 ">
                    <h2 className='font-bold'>Partner</h2> <br />
                    <a className='py-0' href="">Our Partner</a> <br /> <br />
                    <a className='py-0' href="">Become a Partner</a>
                </div>
            </div> <br /> <hr />
            <div className="end-footer flex flex-wrap justify-between py-8 p-5 ">
                <p>Copyright
            2023 Orbido. All Rights Reserved.</p>
            <div className="social flex justify-between mt-6 sm:mt-0">
                <img src='' alt="" />
                <img className='mx-2' src={facebook} alt="" />
                <img className='mx-2' src={twiter} alt="" />
                <img className='mx-2' src={linkid} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Footer;