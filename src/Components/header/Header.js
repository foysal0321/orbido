import React from 'react';
import './Header.css'
import reward from './Group 481727.png'
import percent from './Group 481744.png'
import balance from './Group 481745.png'

const Header = () => {
    return (
        <div>
            <div className="header py-12">
                <h2 className=''>MAKE YOUR DREAM <span>WEBSITE</span> <br /> STAND OUT <br /> IN A CROWD</h2>               
            </div>
            {/* anather section */}
            <div className="py-12">
            <div className="section1 flex justify-between flex-wrap py-12 sm:p-3 p-5 ">
                <div className="section1-text">
                <h4 className=''>You do the business, <br />
                    we’ll handle the money.
                </h4>
                 <p className='py-5'>With the right credit card, you can improve your financial life <br /> by building credit, earning rewards and saving money. But <br />  with hundreds of credit cards on the market.</p>
                 <button className='btn btn-sm rounded-md'>Get Start</button>
                 </div>
                 <div className="section1-icons lg:pt-0 pt-10">
                    <div className="flex py-2">
                        <span><img className='w-12' src={reward} alt="" /></span>
                        <p className='mx-4 text-gray-400'><span className='text-white'>Reward</span>  <br />
                            The best credit cards offer some tantalizing <br /> combinations of promotions and prizes
                            </p>
                    </div>
                    <div className="flex py-2">
                        <span><img className='w-12' src={percent} alt="" /></span>
                        <p className='mx-4 text-gray-400'><span className='text-white'>100% secured</span>  <br />
                            We take proactive steps make sure your <br /> information and transactions are secure.
                            </p>
                    </div>
                    <div className="flex py-2">
                        <span><img className='w-12' src={balance} alt="" /></span>
                        <p className='mx-4 text-gray-400'><span className='text-white'>Balance</span>  <br />
                           A balance transfer credit card can save <br /> you a lot of money in interest charges.
                            </p>
                    </div>
                 </div>
            </div>
            </div>
        </div>
    );
};

export default Header;