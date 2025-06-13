import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './Cart.css'
import { RxCross2 } from 'react-icons/rx';
import CartTotal from '../../component/CartTotal';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
export default function Cart() {
  const { product, cartItem, removeCart , updateQuantity} = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const tempData = [];
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        tempData.push({
          id: item,
          quantity: cartItem[item]
        })
      }
    }
    setCartData(tempData);
  }, [cartItem])
 
  return (
    <div>
    <div className="cart-container">
      <div className='cart-title'>
        <h1>Your Cart</h1>
      </div>
      <div className='cart-items'>
        {
          cartData.map((item, index) => {
            const productData = product.find((product) => product.id == item.id);
            return (
              <div key={index} className='cart-item-container'>
                <div className='cart-item-image'>
                  <img src={productData.images[0]} />
                </div>
                <div className='cart-data'>
                  <p className='cart-item-name'>{productData.title}</p>

                  <p className='cart-item-name'>{productData.price * item.quantity}</p>
                  <p className='quantity'>{item.quantity}</p>
                </div>
            
                <input type="number" className='input-box'onChange={(e) =>  e.target.value == " " || e.target.value === 0 ? null : updateQuantity(item.id,Number(e.target.value))} />
              
                < RxCross2 className='delete' onClick={() => removeCart(productData.id)} />
               

              </div>
            )
          })
        }
      </div>
      </div>
      <div className='cart-tm'>
        <div className='cart-tm-main'>
        <CartTotal />
     
        <div>
          <button onClick={() => navigate('/place-order')} className='checkout'>PROCEED TO CHECKOUT</button>
        </div>
        </div>
      </div>
      </div>
   
   
  )
}
