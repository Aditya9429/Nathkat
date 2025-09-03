import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [currstate ,setCurrState] = useState("Login");
  const navigate = useNavigate();
  function  handleClick(){
    navigate('/recovery');
  }
  return (
    <div>
       <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currstate}</h2>
                </div>
                <div className='login-popup-inputs'>
                    {currstate === "Login" ? <></> : <input type="text" placeholder='Enter your name' required />
                    }
                    <input type="email" placeholder='Enter your email' required />
                    <input type="password" placeholder='Enter your password' required />

                </div>
                <button>{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
                  <p className='forget' onClick={handleClick}>Forget Your Password ?</p>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privact policy.</p>
                </div>
                {currstate === "Login"
                    ? <p >Create a new account? <span  className='sign' onClick={()=> setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account <span  className='login' onClick={()=> setCurrState("Login")}>Login here </span></p>
                }
            </form>
    </div>
  )
}
