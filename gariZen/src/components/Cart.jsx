import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Cart = (props) => {
    const { cart, setShowCart } = props
  return (
    <div className='min-h-screen py-2 px-5 space-y-3'>
        <h1 className='font-bold text-primary text-lg'>Cart</h1>
        <hr />
        <div className='w-full grid place-items-center space-y-2'>
            {cart.map(item => {
                return(
                    <div key={item.id} className='border border-gray-200 h-42 w-[90%] md:w-[85%] lg:w-[75%] xl:w-[50%] flex'>
                        <div className=' w-1/4'>
                            <img className='object-scale-down w-32' src={item.imgUrl} alt='cart' />
                        </div>
                        <section className=' w-3/4'>{item.name}</section>
                    </div>
                )
            })}
        </div>
        <section className='flex items-center cursor-pointer' onClick={() => setShowCart(true)} >
            <MdOutlineKeyboardBackspace size={24} color='black' className='animate-bounce' />
            <p>Continue Shopping</p>
        </section>
    </div>
  )
}

export default Cart