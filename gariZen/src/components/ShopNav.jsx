import React from 'react'
import { CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";

const ShopNav = (props) => {
  const {showCart, setShowCart} = props
  return (
    <div className='w-full flex justify-end py-2 px-3 md:px-10 space-x-5'>
        <CiHeart size={24} className='hover:translate-y-1 cursor-pointer' />
        <CiUser size={24} className='hover:translate-y-1 cursor-pointer' />
        <CiShoppingCart onClick={() => setShowCart(!showCart)} size={24} className='hover:translate-y-1 cursor-pointer' />
    </div>
  )
}

export default ShopNav