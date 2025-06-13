import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import './RelatedProducts.css';
export default function RelatedProducts({ category }) {
  const { product } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (product.length > 0 && category) {
      const filtered = product.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setRelated(filtered.slice(0, 4));
    }
  }, [product, category]);

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="related-list">
        {related.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="related-card">
            <img src={item.thumbnail} alt={item.title} className="related-img" />
            <p className="related-title">{item.title}</p>
            <p className="related-price">${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
