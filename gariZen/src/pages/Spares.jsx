import React, { useState } from 'react'
import ShopNav from '../components/ShopNav'
import PopularCategories from '../components/PopularCategories'
import SpecialOffers from '../components/SpecialOffers'
import Footer from '../components/Footer'
import Cart from '../components/Cart'

function Spares() {
  const [ showCart, setShowCart ] = useState(true)
  const [ cart, setCart ] = useState([])
  return (
    <div className='w-full py-2'>
      <ShopNav
        setShowCart={setShowCart}
        showCart={showCart}
        cart={cart}
      />
      {
        showCart ? 
        <>
        <PopularCategories />
        <SpecialOffers 
          cart={cart}
          setCart={setCart}
        />
        </>
        :
        <Cart
          cart={cart} 
        />
      }
      <Footer />
    </div>
  )
}

export default Spares