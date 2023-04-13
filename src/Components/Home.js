import React from 'react';
import Navbar from './navbar/Navbar';
import './Home.css'
import Header from './header/Header';
import About from './about/About';
const Home = () => {
    return (
        <div className='main'>
            <Navbar />
            <Header />
            <About />
        </div>
    );
};

export default Home;