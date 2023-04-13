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
            <div className="footer-main flex flex-wrap justify-between py-12">
                <div className="footer1">
                    <h2 className='flex'>
                        <img src={logo} alt="" />
                        <img src={name} alt="" />
                    </h2><br />
                    <p>A new way to make the payments <br /> easy, reliable and secure.</p>
                </div>
                <div className="footer2">
                    <h2>Usefull Links</h2> <br />
                    <a href="">Content</a> <br />
                    <a href="">How it Works</a> <br />
                    <a href="">Create</a> <br />
                    <a href="">Explore</a> <br />
                    <a href="">Terms & Services</a> <br />
                </div>
                <div className="footer3">
                    <h2> Community</h2> <br />
                    <a href="">Help Center</a> <br />
                    <a href="">Partners</a> <br />
                    <a href="">Suggestions</a><br />
                    <a href="">Blog</a><br />
                    <a href="">Newsletters</a>
                </div>
                <div className="footer4">
                    <h2>Partner</h2><br />
                    <a href="">Our Partner</a> <br />
                    <a href="">Become a Partner</a>
                </div>
            </div> <hr />
            <div className="end-footer flex flex-wrap justify-between py-10">
                <p>Copyright
            2023 Orbido. All Rights Reserved.</p>
            <div className="social flex justify-between">
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