import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';
import { ShopContext } from '../context/ShopContext';
import { RxCross2 } from 'react-icons/rx';
import { LuMoonStar } from "react-icons/lu";
import { CiSun } from "react-icons/ci";

export default function Navbar() {
    const [visible, setVisible] = useState(false);
    const { darkMode, theme, toggleTheme, setShowSearch, getCartCount } = useContext(ShopContext);
    const navigate = useNavigate();
    const sideBarRef = useRef();

    useEffect(() => {
        if (!visible) return;

        function handleOutsideClick(e) {
            if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
                setVisible(false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [visible]);


    function handlClick(){
        navigate('/');
    }
    return (
        <div className={`navbar-container ${darkMode ? 'navbar-dark' : ''}`}>
            <div className='navlink-container'>

                <h1 className='title' onClick={handlClick}>Natkhat</h1>

                <ul className='ul-container'>
                    <NavLink to="/"           className={({ isActive }) => isActive ? "active" : ""}><p>Home</p><hr /></NavLink>
                    <NavLink to="/about"      className={({ isActive }) => isActive ? "active" : ""}><p>About</p><hr /></NavLink>
                    <NavLink to="/collection" className={({ isActive }) => isActive ? "active" : ""}><p>Collection</p><hr /></NavLink>
                    <NavLink to="/contact"    className={({ isActive }) => isActive ? "active" : ""}><p>Contact</p><hr /></NavLink>

                    <div onClick={toggleTheme} className='theme-toggle'>
                        {theme === "light" ? <LuMoonStar /> : <CiSun />}
                    </div>
                </ul>

                <div className='left-part'>
                    <Search className='search-icon' onClick={() => setShowSearch(true)} />

                    <div className='admin-wrapper'>
                        <User className='profile-icon' onClick={() => navigate('/login')} />
                        <div className='admin-container-list'>
                            <div className='dropdown-menu'>
                                <p className='dropdown-item'>My Profile</p>
                                <p className='dropdown-item'>Orders</p>
                                <p className='dropdown-item'>Logout</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/cart" className="cart-wrapper">
                        <ShoppingBag className='cart-icon' />
                        <p className='number-cart'>{getCartCount()}</p>
                    </Link>

                    <Menu className='menu-icon' onClick={() => setVisible(true)} />
                </div>

              
                <div ref={sideBarRef} className={`sidebar-container ${visible ? 'active' : ''}`}>
                    <div className="sidebar-content-wrapper">
                        <div className='sidebar-back-button'>
                            <RxCross2 onClick={() => setVisible(false)} className='sidebar-back-icon' />
                            <p onClick={() => setVisible(false)} className='sidebar-back-text'>Back</p>

                            <div onClick={toggleTheme} className='theme-toggle'>
                                {theme === "light" ? <LuMoonStar /> : <CiSun className='sun' />}
                            </div>
                        </div>

                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/">Home</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/collection">Collection</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/about">About</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/contact">Contact</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='sidebar-link' to="/account">Account</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
