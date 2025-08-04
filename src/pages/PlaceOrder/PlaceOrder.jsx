import React from 'react'
import CartTotal from '../../component/CartTotal'
import './PlaceOrder.css'
import { FaAmazonPay, FaGooglePay } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa";

export default function PlaceOrder() {
  return (
    <div className='placeorder-container'>
      <div className='placeorder-left'>
        <div className='placeorder-title'>
          <h1>DELIVERY INFORMATION-</h1>
   
        </div>
        <div className='input'>
          <input type="text" placeholder='Name' className='input1'/>
          <input type="text" placeholder='Surename' className='input1'/>
        </div>
        <div className='input-address'>
        <input type="text" placeholder='Address' className='input2' />
        <input type="text" placeholder='Street' className='input2'/>
        </div>
        <div className='input-city'>
          <input type="text" placeholder='City' className='input-3' />
          <input type="text" placeholder='State' className='input-3' />
        </div>
        <input type="number" placeholder='Phone number' className='input4'/>
      </div>
      <div className='placeorder-right'>
        <div className='placeorder-cart'>
          <CartTotal/>
          <div className='ju'>
            <FaAmazonPay className='i'/>
            <FaGooglePay  className='i'/>
          </div>
        </div>
      </div>
    </div>
  )
}
