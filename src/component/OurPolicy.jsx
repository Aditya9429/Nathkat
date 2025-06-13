import React from 'react'
import { MdOutlineChangeCircle } from 'react-icons/md'
import { RiCustomerServiceFill, RiExchangeFundsFill } from 'react-icons/ri'
import './OurPolicy.css'
export default function OurPolicy() {
  return (
    <div className='policy-container'>
      <div className='policy-wrapper'>
        <RiExchangeFundsFill className='policy-icon' />
        <p className='policy-title'>Easy Exchange Policy</p>
        <p className='policy-data'>We offer hassie free exchange policy</p>
      </div>
      <div className='policy-wrapper'>
        <MdOutlineChangeCircle className='policy-icon' />
        <p className='policy-title'>7 days Return policy</p>
        <p className='policy-data'>We provide 7 days free return policy</p>
      </div>
      <div className='policy-wrapper'>
        <RiCustomerServiceFill className='policy-icon' />
        <p className='policy-title'>Best customer support</p>
        <p className='policy-data'>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}
