import React from 'react'
import './About.css'
import NewsLetterBox from '../../component/NewsLetterBox'
export default function About() {
  return (
    <div className='about-container'>
      <div className='about-title'>
        <h1>About Us-</h1>
      </div>
      <div className='about-main'>
        <img src='/about.jpg' />
        <div className='about-data'>
          <p>Welcome to Nathkat Store, your go-to destination for premium-quality products that blend style, durability, and value</p>
          <p>At Nathkat Store, we believe shopping should be joyful, </p>
          <b>Our Goal </b>
          <p>Expand Our Product Range – We aim to add more unique and high-demand categories, giving you even more choices under one trusted name.
            🌍 Sustainable Practices – We are moving towards eco-friendly packaging and partnering with ethical manufacturers to reduce our environmental impact.
            📱</p>
        </div>
      </div>
      <div className='about-down'>
        <h1>WHY CHOOSE US-</h1>
      </div>
      <div className='about-down-data'> 
        <div className='about-box'>
          <b>Quality Assurance</b>
          <p className='about-text'>Every product we offer is a reflection of our commitment to excellence, durability, and customer satisfaction. From sourcing raw materials to final packaging, we follow a strict</p>
        </div>
        <div className='about-box'>
          <b>Conveince</b>
          <p className='about-text'>Our products go through strict quality checks, so you get only what’s best – no compromises, no surprises.</p>
        </div>
        <div className='about-box'>
          <b>Exceptional Customer Service</b>
          <p className='about-text'>We believe that great products deserve equally great service. That’s why we’ve built a customer support experience that’s responsive, reliable, and real. Whether you need help tracking an order</p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}
