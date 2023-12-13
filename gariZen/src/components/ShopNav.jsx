import React from 'react'
import { CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";

const ShopNav = (props) => {
  const {showCart, setShowCart, cart} = props
  return (
    <div className='w-full flex justify-end py-2 px-6 md:px-10 space-x-4 md:space-x-5'>
        <CiHeart size={26} className='hover:translate-y-1 cursor-pointer' />
        <CiUser size={26} className='hover:translate-y-1 cursor-pointer' />
        <div  className='hover:translate-y-1 cursor-pointer relative'>
          <CiShoppingCart onClick={() => setShowCart(!showCart)} size={26} />
          { cart && 
            <span className='bg-primary text-white absolute top-1 left-6 text-sm rounded-full w-5 grid place-items-center'>{cart.length}</span>
          }
          
        </div>
    </div>
  )
}

export default ShopNav