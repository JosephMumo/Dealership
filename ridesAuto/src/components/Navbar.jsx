import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'flowbite-react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { LuMenu } from 'react-icons/lu'

function Navbar() {
  return (
    <>
        <div className='hidden md:w-full text-tertiary bg-primary md:flex md:flex-row'>
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
        <div className='w-full bg-primary flex flex-row justify-between items-center p-3 px-5 md:hidden'>
            <div className='text-tertiary text-sm flex font-bold'>
                <p>Call:+254718304580</p>
            </div>
            <div>
                <LuMenu color='white' size={20} />
            </div>
        </div>
    </>
  )
}

export default Navbar