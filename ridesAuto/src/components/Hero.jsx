import React from 'react'
import { MdOutlineGppGood, MdPriceCheck } from 'react-icons/md'
import { GrUserExpert } from 'react-icons/gr'

const  Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 py-5 px-24 space-y-5 md:space-y-0'>
        <div className=' grid place-items-center py-3 md:p-10'>
            <div className='w-24 md:w-28 h-24 md:h-28 bg-tertiary rounded-full grid place-items-center mx-auto'>
                <div className='w-12 md:w-16 h-12 md:h-16 bg-secondary rounded-full grid place-items-center'>
                    <MdOutlineGppGood size={24} />
                </div>
            </div>
            <h2 className='my-5 font-bold text-lg'>Unrivaled Selection</h2>
            <p className='text-center'>Explore a diverse range of vehicles, from sleek sedans to rugged SUVs, all meticulously inspected for quality and performance.</p>
        </div>
        <div className=' grid place-items-center py-3 md:p-10'>
            <div className='w-24 md:w-28 h-24 md:h-28 bg-tertiary rounded-full grid place-items-center mx-auto'>
                <div className='w-12 md:w-16 h-12 md:h-16 bg-secondary rounded-full grid place-items-center'>
                    <GrUserExpert size={24} />
                </div>
            </div>
            <h2 className='my-5 font-bold text-lg'>Expert Guidance</h2>
            <p className='text-center'>Our team of seasoned professionals is dedicated to helping you find the perfect vehicle that suits your lifestyle and budget.</p>
        </div>
        <div className=' grid place-items-center py-3 md:p-10'>
            <div className='w-24 md:w-28 h-24 md:h-28 bg-tertiary rounded-full grid place-items-center mx-auto'>
                <div className='w-12 md:w-16 h-12 md:h-16 bg-secondary rounded-full grid place-items-center'>
                    <MdPriceCheck size={24} />
                </div>
            </div>
            <h2 className='my-5 font-bold text-lg'>Competitive Pricing</h2>
            <p className='text-center'>Experience unparalleled transparency and fairness in our pricing, ensuring you receive the utmost value for your investment</p>
        </div>
    </div>
  )
}

export default  Hero