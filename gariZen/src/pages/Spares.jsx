import React, { useState } from 'react'
import ShopNav from '../components/ShopNav'
import PopularCategories from '../components/PopularCategories'
import SpecialOffers from '../components/SpecialOffers'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

function Spares() {
  const [ showCart, setShowCart ] = useState(false)
  return (
    <div className='w-full py-2'>
      <ShopNav
        setShowCart={setShowCart}
        showCart={showCart}
      />
      {
        showCart ? 
        <>
        <PopularCategories />
        <SpecialOffers />
        </>
        :
        <Cart />
      }
      <Footer />
    </div>
  )
}

export default Spares