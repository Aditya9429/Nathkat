import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Cross, Search } from 'lucide-react';
import './SearchBar.css'
import { RxCross2 } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
export default function SearchBar() {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes('collection')) {
            setVisible(true)
        } else {
            setVisible(false);
        }
    }, [location])
    return showSearch  && visible? (

        <div className='searchbar-container'>
            <div className='searchbar-input-container'>
                <input type='text' value={search} placeholder='Search Your Product here' onChange={(event) => setSearch(event.target.value)} className='searchbar-input' />
                <Search className='searchbar-container-search' />
            </div>
            <RxCross2 className="searchbar-cross" onClick={() => setShowSearch(false)} />
        </div>

    ) : null
}
