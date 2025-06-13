import React, { useContext } from 'react'
import './ProductItem.css'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


export default function ProductItem({ key, item }) {
    const {product} = useContext(ShopContext)
     const navigate = useNavigate();
    
    return (
        <div className='product-card' >
            <div className="product-image" key={key}  onClick={() => navigate(`/product/${item.id}`)}>
                <img className="item-img" src={item.thumbnail} alt={item.category} />
                <div className='item-data'>
                    <p className='item-title'>{item.title}</p>
                    <p className='item-brand'>{item.brand}</p>
                    {/* <p>{item.category}</p> */}
                    <p className='item-price'>{item.price}$</p>
                    <p className='item-rating'>{item.rating}</p>
                </div>
            </div>
        </div>
    )
}
