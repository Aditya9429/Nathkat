import React, { useContext } from 'react'
import Hero from '../../component/Hero'
import LatestCollection from '../../component/LatestCollection'
import OurPolicy from '../../component/OurPolicy'
import NewsLetterBox from '../../component/NewsLetterBox'
import { ShopContext } from '../../context/ShopContext'
export default function Home() {
  
  return (
    <div className='home-container'>
      <Hero />
      <LatestCollection />
     
      
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}
