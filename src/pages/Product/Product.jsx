import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext';
import './Product.css'
import { Currency } from 'lucide-react';
import RelatedProducts from '../../component/RelatedProducts';

export default function Product() {
  const { productId } = useParams();
  console.log("productID", productId);
  const { product, addToCart, removeCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  console.log(productId);
  async function fetchProductData() {

    product.map((item) => {
      if (item.id === Number(productId)) {
        setProductData(item);
        setImage(item.images[0]);
        return null;
      }
    })
  }
  useEffect(() => {
    fetchProductData();
    window.scrollTo(0, 0);
  }, [productId])
  return productData ? (
    <div className='product-container'>
      <div className='product-container-main'>
        <div className='product-container-left'>
          <div className='product-sub'>
            {
              productData.images.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='product-img' />
              ))

            }
          </div>
          <div className='left-right'>
            <img src={image} className='product-sub-img' />
          </div>
        </div>
        <div className='product-title'>
          <h1>{productData.title}</h1>
          <div className='product-rating-content'>
            <div className="product-rating">
              {Array(5).fill().map((_, i) => (
                <span key={i}>
                  {i < Math.round(productData.rating) ? "★" : "☆"}
                </span>
              ))}
            </div>
          </div>
          <p className='product-currency'>{productData.currency}{productData.price} <span className='span-price'>$</span></p>
          <p className='product-description'>{productData.description}</p>
          <p className='product-brand'>Brand : {productData.brand}</p>
          <div className='product-cart'>
            <button onClick={() => addToCart(productData.id)} className='product-button'>Add to Cart</button>
            <button onClick={() => removeCart(productData.id)} className='product-button' >Remove from cart</button>
            {/* <hr /> */}
          </div>
          <div className='product-policy'>
            <p>100% Orginal Product</p>
            <p>Cash on Delivery is available on this product</p>
            <p>Easy return and exchange policy width 7 days</p>

          </div>
        </div>
        {/* <div className='review-container'>
          <div className='review-container-box'>
            <p className='review-text'>Description</p>
            <p className='review-text'>Review(122)</p>
          </div>
          <div className='review-data'>
            <p className='review'>I recently tried the Maybelline Fit Me Matte + Poreless Foundation, and I must say it lives up to the hype. The texture is lightweight and blends effortlessly into the skin, providing a natural matte finish. It’s perfect for oily to combination skin types, as it helps control shine without feeling heavy. What impressed me the most is its buildable coverage — you can keep it light for a daily look or add a bit more for special occasions. It lasted a good 6–7 hours on my skin without creasing or settling into fine lines.</p>
            <p className='review'>"I used it consistently for 3 weeks, and my skin felt softer and looked visibly plumper. Best results when used at night after cleansing.".</p>

          </div>
        </div> */}
        <RelatedProducts category={productData.category} />
      </div>
    </div>
  ) : (
    null
  )
}
