import React from 'react'
import { MdOutlineGppGood, MdPriceCheck } from 'react-icons/md'
import { BiCool } from "react-icons/bi"
import HeroChild from './HeroChild'

const  Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 py-5 px-24 space-y-5 md:space-y-0 text-black'>
        <HeroChild 
            icon={ <MdOutlineGppGood size={18} color='white' /> }
            title='Unrivaled Selection'
            description='Explore a diverse range of vehicles, from sleek sedans to rugged SUVs, all meticulously inspected for quality and performance.'
        />
        <HeroChild
            icon={ <BiCool size={18} color='white' /> } 
            title='Expert Guidance'
            description='Our team of seasoned professionals is dedicated to helping you find the perfect vehicle that suits your lifestyle and budget.'
        />
        <HeroChild 
            icon={ <MdPriceCheck size={18} color='white' /> }
            title='Competitive Pricing'
            description='Experience unparalleled transparency and fairness in our pricing, ensuring you receive the utmost value for your investment'
        />
    </div>
  )
}

export default  Hero