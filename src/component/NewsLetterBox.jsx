import React from 'react'
import './NewLetterBox.css'
export default function NewsLetterBox() {
    function handleSubmit(event){
        event.preventDefault();
    }
    return (
        <div className='letter-container'>
            <p className='letter-title'>Subscribe now & get 20% off</p>
            <p className='letter-text'>“Here’s a little something to say thanks – 20% OFF your purchase!”

</p>
            <form onSubmit={handleSubmit} className='letter-form'>
                <input  className="letter-input" type='email' id="email"  placeholder='Enter your email'/>
                <button className='letter-button'>SUBSCRIBE</button>
            </form>
        </div>
    )
}
