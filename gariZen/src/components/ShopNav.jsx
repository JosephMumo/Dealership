import React from 'react'
import { CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";

const ShopNav = () => {
  return (
    <div className='w-full flex justify-end py-2 px-3 md:px-10 space-x-5'>
        <CiHeart size={24} />
        <CiUser size={24} />
        <CiShoppingCart size={24} />
    </div>
  )
}

export default ShopNav