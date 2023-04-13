import React from 'react';
import Navbar from './navbar/Navbar';
import './Home.css'
import Header from './header/Header';
const Home = () => {
    return (
        <div className='main'>
            <Navbar />
            <Header />
        </div>
    );
};

export default Home;