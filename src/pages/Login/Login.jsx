import React, { useState } from 'react'
import './Login.css'
export default function Login() {
  const [currstate ,setCurrState] = useState("Login")
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
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privact policy.</p>
                </div>
                {currstate === "Login"
                    ? <p>Create a new account? <span onClick={()=> setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account <span  onClick={()=> setCurrState("Login")}>Login here </span></p>
                }
            </form>
    </div>
  )
}
