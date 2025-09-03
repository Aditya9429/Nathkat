import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recovery.css'; 

export default function Recovery() {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/account');
    }
   function handleLogin(){
    navigate('/login')
   }
    return (
        <div className='recovery-container'>
            <div className='recovery-wrapper'>
                <div className='recovery-header'>
                    <h1 className='recovery-title'>Recovery Password</h1>
                    <p className='recovery-subtitle'>We'll send you an email to reset your password.</p>
                </div>
                <div className='recovery-form-group'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" className="recovery-input" />
                </div>
                <div className='recovery-button-wrapper'>
                    <button className='recovery-button'>Send</button>
                </div>
                <p className='recovery-back' onClick={handleLogin}>Back to login</p>
            </div>
        </div>
    );
}
