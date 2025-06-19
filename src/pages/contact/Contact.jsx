import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Us-</h1>
      <div className='contact-main'>
        <img src='/contact.png'  className='contact-img'/>
        <div  className='contact-data'>
          <p className='text'>Our Store</p>
          <p>518 Pratap Vihar <br /> kirari 350 ,Delhi India</p>
          <p>tel : +91 965446904 <br /> Email : ak3927675@gmail.com</p>
          <p className='text'>Careers at Forever</p>
          <p>Learn more about out teams and  job openings</p>
          <button className='jobs'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}
