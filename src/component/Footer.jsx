import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-main-container'>
                <div className='footer-col1'>
                    <h1 className='footer-title'>Natkhat</h1>
                    <p className='footer-text'>At Nathkal, we blend tradition with innovation to bring you high-quality beauty and personal care products made with love and care. Our mission is to offer natural, effective, and affordable solutions that enhance your daily self-care routine</p>
                </div>
                <div className='footer-col2'>
                    <div className='footer-sub-col2'>
                        <p className='footer-title2'>COMPANY</p>
                        <ul className='footer-list'>
                           <li to="/">Home</li>
                            <NavLink to="/about"><li>About</li></NavLink>

                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className='footer-col3'>
                        <p className='footer-title3'>GET IN TOUCH</p>
                        <ul className='footer-list2'>
                            <li>+91-9654469604</li>
                            <li>contact@Natkhat.com</li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className='footer-copyright'>
                <hr />
                <p>Copyright 2024@ Nathkhat.com - All Right Reserved</p>
            </div>

        </div >
    )
}
