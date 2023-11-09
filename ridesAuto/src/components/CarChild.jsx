import React from 'react'
import {MdVerified} from 'react-icons/md'
import { appFunc } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const CarChild = ({id, img, year, title, name, milage, capacity, transmission, fuel, price, desc}) => {
    const { setInfo } = appFunc()
    const navigate = useNavigate()
    function descFunc({id, img, year, title, name, milage, capacity, transmission, fuel, price, desc}) {
        setInfo({id, img, year, title, name, milage, capacity, transmission, fuel, price, desc})
        navigate('/description')
        
    }
  return (
    <div className='bg-white w-80 md:w-72 h-80 mt-5 group cursor-pointer p-3' onClick={() => descFunc({id,img, year, title, name, milage, capacity, transmission, fuel, price, desc})}>
        <img src={img} alt='cars' className='w-80 md:w-72 h-1/2 object-cover' />
        <section className='flex space-x-1 mx-3'>
            <p>{year}</p>
            <p>{title}</p>
        </section>
        <section className='flex justify-between items-center mx-4'>
            <h3 className='text-lg font-semibold'>{name}</h3>
            <section className='flex items-center space-x-1'>
                <p className='text-[#2ECC71] font-bold hidden group-hover:block'>Verified</p>
                <MdVerified color='#2ECC71' size='1em' className='hidden group-hover:block' />
            </section>
        </section>
        <section className='flex space-x-1 mx-3'>
            <p>{milage}kms</p>
            <p>{capacity}</p>
            <p>{transmission}</p>
            <p>{fuel}</p>
        </section>
        <hr />
        <h2 className='text-2xl font-bold m-3'>KES {price}</h2>
    </div>
  )
}

export default CarChild