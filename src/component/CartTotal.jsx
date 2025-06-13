import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import './CartTotal.css'
export default function CartTotal() {
    const {product, getCartTotal}  = useContext(ShopContext);
    const deliveryFeee = 10;
  return (
    <div className='carttotal-container'>
      <div className='cartTotal-title'>
        <h1>Cart total</h1>
      </div>
      <div className='carttotalMain'>
        <div className='cartSubtotal'>
            <p>SubTotal</p>
            <p>{getCartTotal()}.00</p>
        </div>
        <hr />
        <div className='cartDelivery'>
            <p>Delivery fee</p>
            <p>{deliveryFeee}</p>
        </div>
        <hr />
        <div className='cartotal'>
            <p>TotalAmount</p>
             <p>{getCartTotal() === 0 ? 0 : getCartTotal() + deliveryFeee }</p>
        </div>
      </div>
    </div>
  )
}
