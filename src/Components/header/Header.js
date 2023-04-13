import React from 'react';
import './Header.css'
import reward from './Group 481727.png'
import percent from './Group 481744.png'
import balance from './Group 481745.png'

const Header = () => {
    return (
        <div>
            <div className="header py-12">
                <h2 >MAKE YOUR DREAM <span>WEBSITE</span> <br /> STAND OUT <br /> IN A CROWD</h2>               
            </div>
            {/* anather section */}
            <div className="section1 flex justify-between flex-wrap py-12">
                <div className="section1-text">
                <h4>You do the business, <br />
                    we’ll handle the money.
                </h4>
                 <p className='py-2'>With the right credit card, you can improve your financial life <br /> by building credit, earning rewards and saving money. But <br />  with hundreds of credit cards on the market.</p>
                 <button className='btn btn-sm rounded-md'>Get Start</button>
                 </div>
                 <div className="section1-icons">
                    <div className="flex py-2">
                        <span><img src={reward} alt="" /></span>
                        <p className='mx-4'><span className=''>Reward</span>  <br />
                            The best credit cards offer some tantalizing <br /> combinations of promotions and prizes
                            </p>
                    </div>
                    <div className="flex py-2">
                        <span><img src={percent} alt="" /></span>
                        <p className='mx-4'><span>100% secured</span>  <br />
                            We take proactive steps make sure your <br /> information and transactions are secure.
                            </p>
                    </div>
                    <div className="flex py-2">
                        <span><img src={balance} alt="" /></span>
                        <p className='mx-4'><span>Balance</span>  <br />
                           A balance transfer credit card can save <br /> you a lot of money in interest charges.
                            </p>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Header;