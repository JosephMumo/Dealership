import React from 'react'
import { Link } from 'react-router-dom'

const Navmain = () => {
  return (
    <div className=' border-b-2 hidden text-black md:flex md:flex-row md:justify-center md:items-center md:space-x-5 lg:space-x-12 md:py-3 md:px-2 lg:px-5 md:bg-white md:w-full'>
        <Link to='/'>
            <h1 className='text-primary md:text-2xl lg:text-3xl '>GariZen</h1>
        </Link>
        <Link to='/cars'>
            <h4 className='text-lg font-bold'>Buy Car</h4>
        </Link>
        <Link to='/sell'>
            <h4 className='text-lg font-bold'>Sell Car</h4>
        </Link>
        <Link to='/spares'>
            <h4 className='text-lg font-bold'>Shop Parts</h4>
        </Link>
        <div>
            <input type='text' name='search' id='search' placeholder='Find a Rides car' className='bg-basic py-1 px-2 md:24 lg:w-64 outline-none' />
        </div>
        <div className='text-black font-semibold'>
            <p>(+254)718304580</p>
        </div>
    </div>
  )
}

export default Navmain