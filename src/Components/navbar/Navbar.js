import React, { useState } from 'react';
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import logo from './logo.png'

const Navbar = () => {
    const [toggle,settoggle] = useState(false)


    return (
        <div className='main md:flex md:items-center md:justify-between'>
            <div className="flex justify-between items-center">
                <span className='flex'>
                    <img src={logo} alt="" />
                    <h2 className='name mt-2'>OR <span>BIDO</span></h2>
                </span>
                <span onClick={()=>settoggle(!toggle)} className='cursor-pointer text-3xl md:hidden block mx-2'>
                  {toggle ? <IoMdClose /> : < BiMenuAltRight />}  
                </span>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-black md:z-auto z-[-1] w-full left-0 md:w-auto md:pl-0 pl-9 transition-all ease-in duration-500 text-black md:text-white           
            ${toggle? 'top-12' : 'top-[-350px]'}`}>
                <li className='mx-4 my-6 md:my-0'>
                    <a className='hover:text-cyan-500 duration-500' href="">Home</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                   <a  className='hover:text-cyan-500 duration-500' href="">About Us</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a className='hover:text-cyan-500 duration-500' href="">Feauters</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                   <a  className='hover:text-cyan-500 duration-500' href="">Solution</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;