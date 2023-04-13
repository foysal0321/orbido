import React from 'react';
import Navbar from './navbar/Navbar';
import './Home.css'
import Header from './header/Header';
import About from './about/About';
import Footer from './footer/Footer';
const Home = () => {
    return (
        <div className='main'>
            <Navbar />
            <Header />
            <About />
            <Footer />
        </div>
    );
};

export default Home;