import React from 'react'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


const Cart = (props) => {
    const { cart, setCart, setShowCart } = props

    const deleteCartItems = (index) => {
        const newCartItems = [ ...cart]
        newCartItems.splice(index, 1)
        setCart(newCartItems)
    }

    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.price;
    }, 0)

    if(cart.length === 0) {
        return (
        <div className='w-full my-10 p-3'>
            <h1 className='text-center font-bold p-2'>No items added in your cart</h1>
            <section className='flex items-center cursor-pointer space-x-2' onClick={() => setShowCart(true)} >
                <MdOutlineKeyboardBackspace size={24} color='black' className='animate-ping' />
                <p>Continue Shopping</p>
            </section>
        </div>
        )
    }
  return (
    <div className='min-h-screen py-2 px-5 space-y-3'>
        <h1 className='font-bold text-primary text-lg'>Cart</h1>
        <hr />
        <div className='w-full grid place-items-center space-y-2'>
            {cart.map((item, index) => {
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
                        <div onClick={() => deleteCartItems(index)} className='w-[10%] grid place-items-center' >
                            <MdDeleteOutline className='hover:scale-125 cursor-pointer' size={24} color='black' />
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='w-full grid place-items-center'>
            <section className='border border-gray-500 w-[80%] md:w-[30%] px-5 py-3 text-center'>
                <h3 className='font-bold text-base'>Order Summary</h3>
                <p>Total Items :----------- {cart.length}</p>
                <p>Total Tax :-------------0</p>
                <p>Total Price :-----------${totalPrice}</p>
            </section>
            <button className='p-2 bg-primary rounded-sm hover:scale-110 transition delay-200 text-white my-2'>Proceed to Checkout</button>
        </div>
        <section className='flex items-center cursor-pointer space-x-2' onClick={() => setShowCart(true)} >
            <MdOutlineKeyboardBackspace size={24} color='black' className='animate-ping' />
            <p>Continue Shopping</p>
        </section>
    </div>
  )
}

export default Cart