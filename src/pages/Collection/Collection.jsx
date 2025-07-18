import React, { useContext, useState, useEffect } from 'react'
import './Collection.css'
import { ShopContext } from '../../context/ShopContext'
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default function Collection() {
  const { product, filterItem, setFilterItem, search, showSearch } = useContext(ShopContext);
  const [currentSelectcategory, setCurrentCategory] = useState('');
  const [sortOption, setSortOption] = useState('relevant');
  const [visibleCount, setVisibleCount] = useState(10);
  const increment = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const cpyproduct = [...product];
    //   setFilterItem(
    //     currentSelectcategory !== ''
    //       ? cpyproduct.filter(
    //         (productItem) =>
    //           productItem.category.toLowerCase() ===
    //           currentSelectcategory.toLowerCase()
    //       )
    //       : cpyproduct
    //     );
    // if (sortOption === 'low') {
    //   setFilterItem.sort((a, b) => a.price - b.price);
    // } else if (sortOption === 'high') {
    //   setFilterItem.sort((a, b) => b.price - a.price);
    // }
    let filtered =
      currentSelectcategory !== ''
        ? cpyproduct.filter(
          (productItem) =>
            productItem.category.toLowerCase() ===
            currentSelectcategory.toLowerCase()
        )
        : cpyproduct;
    if (showSearch && search.trim() !== "") {
      filtered = cpyproduct.filter((productItem) => productItem.title.toLowerCase().includes(search.toLowerCase()))
    }

    if (sortOption === 'low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilterItem(filtered);

  }, [currentSelectcategory, product, sortOption, search, showSearch]);



  const uniqueCategories =
    product && product.length > 0
      ? [...new Set(product.map((productItem) => productItem.category))]
      : [];

  function handleViewMore() {
    setVisibleCount((prev => prev + increment))
  }
  return (
    <div className='collection-container'>
      <div className='collection-main'>
        <p className='collection-text'>FILTER</p>
        <div className='collection-sub'>
          <p className='collection-text'>CATEGORES</p>
          <div className='collection-filter'>
            {uniqueCategories.map((category) => (
              <div
                key={category}
                onClick={() =>
                  setCurrentCategory(
                    currentSelectcategory !== '' &&
                      currentSelectcategory === category
                      ? ''
                      : category
                  )
                }
                className={`filter-btn ${currentSelectcategory === category ? 'active' : ''
                  }`}
              >
                <p><input type='checkbox' />{category}</p>
              </div>
            ))}

            {/* 
            <p><input type='checkbox' />Beauty</p>

            <p><input type='checkbox' />Furniture</p> */}
          </div>
        </div>
      </div>
      <div className='collection-right'>
        <div className='collection-right-container'>
          <h1>All Collections</h1>
          <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
            <option value='relevant'>Sort By relevant</option>
            <option value='low'>Sort By :Low to High</option>
            <option value='high'>Sort high to low</option>
          </select>
        </div>
        <div >
          {
            <ul className="list-of-products">
              {filterItem &&
                filterItem.length > 0 &&
                filterItem.slice(0, visibleCount).map((productItem) => (
                  <li key={productItem.id} className="products-card" onClick={() => navigate(`/product/${productItem.id}`)}
                    style={{ cursor: 'pointer' }}>
                    <img src={productItem.thumbnail} className='product-item' />
                    <p className="product-content">{productItem.title}</p>

                    <button className="category-btn">{productItem.category}</button>
                  </li>
                ))}
            </ul>

          }

        </div>
        <div className='viewmorebtn'>
        {visibleCount < filterItem.length && (
          <button
            onClick={handleViewMore}
            disabled={visibleCount >= filterItem.length}
            className="viewmore"
          >
            View More
          </button>
        )}
        </div>
      </div>

    </div>
  )
}

