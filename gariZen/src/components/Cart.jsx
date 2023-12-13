import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

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
                        <div className=' w-[25%]'>
                            <img className='object-scale-down w-32' src={item.imgUrl} alt='cart' />
                        </div>
                        <section className=' w-[65%] py-5'>
                            <p>{item.name}</p>
                            <br />
                            <h2 className='font-bold'>${item.price}</h2>
                        </section>
                        <div className='w-[10%] grid place-items-center'>
                            <MdDeleteOutline className='hover:scale-110 cursor' size={24} color='black' />
                        </div>
                    </div>
                )
            })}
        </div>
        <section className='flex items-center cursor-pointer space-x-2' onClick={() => setShowCart(true)} >
            <MdOutlineKeyboardBackspace size={24} color='black' className='animate-ping' />
            <p>Continue Shopping</p>
        </section>
    </div>
  )
}

export default Cart