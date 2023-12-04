import React from 'react'
import ShopNav from '../components/ShopNav'
import PopularCategories from '../components/PopularCategories'
import SpecialOffers from '../components/SpecialOffers'

function Spares() {
  return (
    <div className='w-full p-2'>
      <ShopNav />
      <PopularCategories />
      <SpecialOffers />
    </div>
  )
}

export default Spares