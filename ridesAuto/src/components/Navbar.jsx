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
        <div className='hidden md:w-full  text-tertiary bg-primary md:flex md:flex-row'>
            <div className='w-1/3'></div>
            <div className=' w-2/3 flex flex-row justify-center p-2 lg:space-x-3 md:space-x-2'>
                <Link to='/wishlist'>
                    <h1>Wishlist</h1>
                </Link>
                <Dropdown label='Processes' inline className='px-2 bg-primary'>
                    <Link to='/processes/buying'>
                        <Dropdown.Item>Buying</Dropdown.Item>
                    </Link>
                    <Link to='/processes/selling'>
                        <Dropdown.Item>Selling</Dropdown.Item>
                    </Link>
                    <Link to='/processes/financing'>
                        <Dropdown.Item>Financing</Dropdown.Item>
                    </Link>
                </Dropdown>
                <Dropdown label='Resources' inline className='px-2 bg-primary'>
                    <Link to='/resources/faqs'>
                        <Dropdown.Item>FAQ's</Dropdown.Item>
                    </Link>
                    <Link to='/resources/glossary'>
                        <Dropdown.Item>Glossary</Dropdown.Item>
                    </Link>
                    <Link to='/resources/blog'>
                        <Dropdown.Item>Blog</Dropdown.Item>
                    </Link>
                </Dropdown>
                <Link to='/about'>
                    <h1>AboutUs</h1>
                </Link>
                <Link to='/signin'>
                    <h1>SignIn</h1>
                </Link>
            </div>
        </div>
        <div className='w-full bg-primary flex flex-row justify-between items-center p-4 px-5 md:hidden'>
            <div className='text-tertiary text-base flex font-bold'>
                <p>Call:+254718304580</p>
            </div>
            <div onClick={() => setMenu(!menu)}>
                { menu ? <AiOutlineClose color='white' size={20} /> : <LuMenu color='white' size={20} />}
            </div>
        </div>
        { menu && 
            <div className='bg-white h-auto relative md:hidden p-3 space-y-10'>
                <section className='flex flex-row space-x-1'>
                    <div className='w-1/2 h-64 p-1 rounded-md'>
                        <h4 className='font-bold'>Rides Cars</h4>
                        <section className='p-3 bg-tertiary'>
                            <Link to='/cars'>
                                <h1>Browse cars</h1>
                            </Link>
                            <Link to='/wishlist'>
                                <h1>Wishlist</h1>
                            </Link>  
                        </section>
                    </div>
                    <div className=' w-1/2 h-64 p-1 rounded-md'>
                        <h4 className='font-bold'>Processes</h4>
                        <section className='p-3 bg-tertiary'>
                            <Link to='/processes/buying'>
                                <h2>Buying</h2>
                            </Link>
                            <Link to='/processes/selling'>
                                <h2>Selling</h2>
                            </Link>
                            <Link to='/processes/financing'>
                                <h2>Financing</h2>
                            </Link>
                        </section>
                    </div>
                </section>
                <section className='bg-white flex flex-row space-x-1'>
                    <div className='w-1/2 h-64 p-1 rounded-md'>
                        <h4 className='font-bold'>Resources</h4>
                        <section className='p-3 bg-tertiary'>
                            <Link to='/resources/faqs'>
                                <h2>FAQ's</h2>
                            </Link>
                            <Link to='/resources/glossary'>
                                <h2>Glossary</h2>
                            </Link>
                            <Link to='/resources/blog'>
                                <h2>Blog</h2>
                            </Link>
                        </section>
                    </div>
                    <div className='w-1/2 h-64 p-1 rounded-md'>
                        <h4 className='font-bold'>About</h4>
                        <section className='p-3 bg-tertiary'>
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