import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Search } from 'lucide-react';
import { RxCross2 } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import './SearchBar.css'

export default function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch, product } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [item, setItem] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  useEffect(() => {
    if (search.trim() === "") {
      setSuggestions([]);
    } else {
      const filtered = product.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [search, product]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItem((prev) => (prev + 1) % inputName.length);
      setAnimateKey((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const inputName = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "home-decoration",
    "kitchen-accessories",
    "laptops",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "mobile-accessories"
  ];

  return showSearch && visible ? (
    <div className='searchbar-container'>
      <div className='searchbar-input-container'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='searchbar-input'
          placeholder=""
        />
       
        {search === "" && (
          <span key={animateKey} className="placeholder-animate">
            {inputName[item]}
          </span>
        )}
        <Search className='searchbar-container-search' />
        <RxCross2 className="searchbar-cross" onClick={() => setShowSearch(false)} />
      </div>

      {suggestions.length > 0 && (
        <div className="search-suggestions">
          {suggestions.map((s) => (
            <div
              key={s.id}
              className="search-suggestion-item"
              onClick={() => {
                setSearch(s.title);
                setSuggestions([]);
              }}
            >
              <img src={s.thumbnail} alt={s.title} className="suggestion-img" />
              <span>{s.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  ) : null;
}
