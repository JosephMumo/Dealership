import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'flowbite-react'
import { LuMenu } from 'react-icons/lu'
import { AiOutlineClose } from 'react-icons/ai'
import { appFunc } from '../context/AppContext'

function Navbar() {
    const {menu, setMenu } = appFunc()
  return (
    <>
        <div className='hidden md:w-full  text-white bg-primary md:flex md:flex-row'>
            <div className='w-1/3'></div>
            <div className=' w-2/3 flex flex-row justify-center p-2 lg:space-x-3 md:space-x-2'>
                <Link to='/wishlist'>
                    <h1>Wishlist</h1>
                </Link>
                <Link to='/faqs'>
                        <h1>FAQ's</h1>
                </Link>
                <Link to='/blog'>
                        <h1>Blog</h1>
                </Link>
                <Link to='/about'>
                    <h1>AboutUs</h1>
                </Link>
                <Link to='/signin'>
                    <h1>SignIn</h1>
                </Link>
            </div>
        </div>
        <div className='w-full bg-primary flex flex-row justify-between items-center p-4 px-5 md:hidden'>
            <div className='text-white text-2xl flex font-bold'>
                <Link to='/'>
                    <h1>GariZen</h1>
                </Link>
            </div>
            <div onClick={() => setMenu(!menu)}>
                { menu ? <AiOutlineClose color='white' size={20} /> : <LuMenu color='white' size={20} />}
            </div>
        </div>
        { menu && 
            <div className='bg-white h-screen relative md:hidden p-3 space-y-10 overflow-y-hidden'>
                <section className='flex flex-row space-x-1'>
                    <div className='w-1/2 h-64 p-1 rounded-md'>
                        <h4 className='font-bold'>GariZen</h4>
                        <section className='p-3 bg-basic'>
                            <Link to='/cars'>
                                <h1>Browse cars</h1>
                            </Link>
                            <Link to='/wishlist'>
                                <h1>Wishlist</h1>
                            </Link>  
                            <Link to='/signin'>
                                <h1>SignIn</h1>
                            </Link>
                        </section>
                    </div>
                    <div className=' w-1/2 h-64 p-1 rounded-md'>
                    <h4 className='font-bold'>Resources</h4>
                        <section className='p-3 bg-basic'>
                            <Link to='/faqs'>
                                <h2>FAQ's</h2>
                            </Link>
                            <Link to='/blog'>
                                <h2>Blog</h2>
                            </Link>
                            <Link to='/about'>
                                <h2>About</h2>
                            </Link>
                        </section>
                    </div>
                </section>
            </div>
        }
    </>
  )
}

export default Navbar