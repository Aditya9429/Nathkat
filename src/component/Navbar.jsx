import React, { useContext, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { ChevronDown, Cross, Menu, Search, ShoppingBag, User } from 'lucide-react'
import { ShopContext } from '../context/ShopContext';
import { RxCross2 } from 'react-icons/rx';
import { LuMoonStar } from "react-icons/lu";
import { CiSun } from "react-icons/ci";

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState(false);
    // const [menu,setMenu] = useState("Home")
    const { theme, toggleTheme, setShowSearch, getCartCount } = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div className='navbar-container'>
            <div className='navlink-container'>

                <Link to="/"><h1 className='title'>Natkhat</h1></Link>
                <ul className='ul-container'>
                    <NavLink to='/' >
                        <p className='home-title'>Home</p>
                        <hr />
                    </NavLink>
                    <NavLink to='/about'  >
                        <p>About</p>
                        <hr />
                    </NavLink>
                    <NavLink to='/collection'  >
                        <p>Collection</p>
                        <hr />
                    </NavLink>
                    <NavLink to='/contact' >
                        <p>Contact</p>
                        <hr />
                    </NavLink>
                    <div onClick={toggleTheme}>{theme == 'light' ? <LuMoonStar /> : <CiSun className='sun' />}</div>
                </ul>

                <div className='left-part'>



                    < Search className='search-icon' onClick={() => setShowSearch(true)} />


                    <div className='admin-wrapper'>
                        <User className='profile-icon' onClick={() => navigate('/login')} />
                        <div className='admin-container-list'>
                            <div className='dropdown-menu'>
                                <p className='dropDown-item'>My Profile</p>
                                <p className='dropdown-item'>Orders</p>
                                <p className='dropdownItem '>Logout</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/cart" className="cart-wrapper">
                        <ShoppingBag className='cart-icon' />
                        <p className='number-cart'>{getCartCount()}</p>
                    </Link>
                    <Menu onClick={() => setVisible(true)} />
                </div>
                <div className={`sidebar-container ${visible ? 'active' : ''}`}>

                    <div className="sidebar-content-wrapper">
                        <div className='sidebar-back-button'>
                            <RxCross2 onClick={() => setVisible(false)} className='sidebar-back-icon' />
                            <p className='sidebar-back-text' onClick={() => setVisible(false)}>Back</p>
                            <div>
                                <div onClick={toggleTheme}>{theme == 'light' ? <LuMoonStar /> : <CiSun className='sun' />}</div>
                            </div>
                        </div>

                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/">Home</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/collection">Collection</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/about">About</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
