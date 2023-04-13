import React, { useState } from 'react';
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import logo from './logo.png'
import name from '../footer/Group 481751.png'

const Navbar = () => {
    const [toggle,settoggle] = useState(false)

    return (
        <div className='main md:flex md:items-center md:justify-between pt-4'>
            <div className="flex justify-between items-center">
                <span className='flex'>
                    <img src={logo} alt="" />
                    <img className='w-32 h-8 mt-1' src={name} alt="" />
                </span>
                <span onClick={()=>settoggle(!toggle)} className='cursor-pointer text-3xl md:hidden block mx-2'>
                  {toggle ? <IoMdClose /> : < BiMenuAltRight />}  
                </span>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-zinc-900 bg-gray-300 md:z-auto w-full left-0 md:w-auto md:pl-0 pl-9 transition-all ease-in duration-500 text-black md:text-white z-10         
            ${toggle? 'top-16' : 'top-[-350px]'}`}>
                <li className='mx-4 my-6 md:my-0'>
                    <a className='hover:text-cyan-500 duration-500' href="">Home</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                   <a  className='hover:text-cyan-500 duration-500' href="">About Us</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <a className='hover:text-cyan-500 duration-500' href="">Features</a>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                   <a  className='hover:text-cyan-500 duration-500' href="">Solution</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;