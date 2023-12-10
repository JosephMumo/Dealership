import React from 'react'
import ShopNav from '../components/ShopNav'
import PopularCategories from '../components/PopularCategories'
import SpecialOffers from '../components/SpecialOffers'
import Footer from '../components/Footer'

function Spares() {
  return (
    <div className='w-full py-2'>
      <ShopNav />
      <PopularCategories />
      <SpecialOffers />
      <Footer />
    </div>
  )
}

export default Spares