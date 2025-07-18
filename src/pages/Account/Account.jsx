import React, { useState } from 'react';
import './Account.css';

import {
  FaUniversity, FaWallet, FaStore, FaCoins,
  FaHandshake, FaIndustry, FaBalanceScale
} from "react-icons/fa";

import {
    AiFillHeart,
  AiFillStar,
  AiOutlineHeart, AiOutlineStar
} from "react-icons/ai";

import {
  FiShare2, FiSettings
} from "react-icons/fi";

import {
  MdPolicy
} from "react-icons/md";

import {
  PiCoinsDuotone
} from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

export default function Account() {
     const navigate = useNavigate();
     const[visible,setVisible] = useState(false);
  return (
    <div className='acc-container'>

      <div className="acc-img">
        <img src="/images/Robby.jpg" alt="Profile" />
        <div className='acc-sign'>
          <button onClick={() => navigate('/Login')} >Sign up</button>
          <p>View and update your profile details</p>
        </div>
      </div>

   
      <div className='acc-center'>
        <div className='acc-help'>Help Center</div>
        <div className='acc-help'>Change language</div>
      </div>

     
      <div className='acc-payment'>
        <h1>My Payments</h1>
        <p><span><FaUniversity  className='uni'/></span> Bank & UPI Details</p>
        <hr />
        <p><span><FaWallet className='payment' /></span> Payment & Refund</p>
      </div>


      <div className='acc-activity'>
        <h1>My Activity</h1>
        <p><span><AiFillHeart className='heart' /></span> Wishlisted Products</p>
        <hr />
        <p><span><FiShare2  className='share'/></span> Shared Products</p>
        <hr />
        <p><span><FaStore className='shop' /></span> Followed Shops</p>
      </div>

      <div className='acc-others'>
        <h1>Others</h1>
        <p><span><PiCoinsDuotone  className='coin'/></span> Credits</p>
        <hr />
        <p><span><FaHandshake  className='handshake'/></span> Become a Supplier</p>
        <hr />
        <p><span><FiSettings  className='settings' /></span> Settings</p>
        <hr />
        <p><span><AiFillStar className='star' /></span> Rate Natkhat</p>
        <hr />
        <p><span><MdPolicy className='policy' /></span> Legal and Policies</p>
      </div>
      
      <div className='rating'>
         <div className='rating-content'>
          <h2>Would you like to rate us on Play Store?</h2>
           <p>Your feedback helps us make your experience better</p>
           <div>
           {
            [...Array(5)].map((_,index) => (
                <AiFillHeart key={index} />
            ))

           }
           </div>
           <div className='rating-star'>
            <p>Worst</p>
            <p>Best</p>
           </div>
         </div>
      </div>
    </div>
  );
}
