import React, {  useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import './LatestCollection.css'
import ProductItem from './ProductItem';
export default function LatestCollection() {
    const { product } = useContext(ShopContext);
    return (
        <div className='latest-container'>
            <div className='latest-container-data'>
                <Title text1={"LATEST"} text2={"COLLECTIONS"} />
            </div>
            <div className='product'>
                {
                    product && product.length > 0 ?
                        product.map((item) => (
                            <ProductItem  key={item.id} item={item}/>
                        ))
                        : null
                }
            </div>
        </div>
    )
}
