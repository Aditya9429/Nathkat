import React from 'react'
import Hero from '../../component/Hero'
import LatestCollection from '../../component/LatestCollection'
import OurPolicy from '../../component/OurPolicy'
import NewsLetterBox from '../../component/NewsLetterBox'
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
