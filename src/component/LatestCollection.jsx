import React, {  useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import './LatestCollection.css'
import ProductItem from './ProductItem';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export default function LatestCollection() {
    const { product } = useContext(ShopContext);
    const [visibleCount,setVisibleCount] = useState(10);
    const increment = 10;
     function viewmore(){
        setVisibleCount((prev) => prev + increment);
     }
    return (
        <div className='latest-container'>
            <div className='latest-container-data'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
            </div>
            <div className='product'>
                {
                    product && product.length > 0 ?
                        product.slice(0,visibleCount).map((item) => (
                            <ProductItem  key={item.id} item={item} />
                        ))
                        : null
                }
            </div>
            <div className='viewmorebtn'>
             {
                visibleCount < product.length && (
                    <button onClick={viewmore} className='viewmore' >
                     ViewMore <MdOutlineKeyboardDoubleArrowDown />
                    </button>
                
                )
            }
            </div>
        </div>
    )
}
