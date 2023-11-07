import React from 'react'
import { appFunc } from '../context/AppContext'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import Footer from '../components/Footer'

const CarDescription = () => {
    const { info} = appFunc()

  return (
    <>
    <div className='w-full p-5 h-auto bg-white'>
        <section className='w-full px-5 md:px-10 text-justify md:my-5'>
            <h1 className='text-3xl font-bold my-1'>{info.title} {info.name}</h1>
            <p className='text-lg md:mt-5'>{info.desc}</p>
        </section>
        <section className='w-full grid grid-cols-1  md:grid-cols-2 px-5 md:px-10 md:my-5 md:space-x-10'>
            <div className='w-full md:mt-5'>
                <img src={info.img} className='rounded-2xl' />
            </div>
            <div className='w-full space-y-5  md:space-y-10 mt-5 md:mt-5'>
                <div className='rounded-lg shadow-lg h-56 bg-white'>
                    <div className='h-1/4 p-3 px-5 flex'>
                        <h1 className='text-3xl font-bold'>{info.price}</h1>
                        <sub className='font-bold'>KES</sub>
                    </div>
                    <div className='h-1/2 bg-neutral-50 flex justify-between py-7 px-5'>
                        <section>
                            <p>Mileage</p>
                            <h3 className='font-bold text-lg'>{info.milage}</h3>
                        </section>
                        <section>
                            <p>Fuel</p>
                            <h3 className='font-bold text-lg'>{info.fuel}</h3>
                        </section>
                        <section>
                            <p>Transmission</p>
                            <h3 className='font-bold text-lg'>{info.transmission}</h3>
                        </section>
                        <section>
                            <p>Capacity</p>
                            <h3 className='font-bold text-lg'>{info.capacity}</h3>
                        </section>
                    </div>
                    <div className='h-1/4 p-3 px-5 flex justify-between items-center'>
                        <p>Available on Request</p>
                        <button className=' p-1 px-4 rounded-full bg-black text-white'>ViewRequest</button>
                    </div>
                </div>
                <div className='rounded-lg shadow-lg h-52 bg-white p-3 px-5'>
                    <h3 className='text-2xl font-bold my-2'>Rides Assurance</h3>
                    <hr />
                    <section className='my-3 space-y-1'>
                        <div className='flex items-center space-x-1'>
                            <MdOutlineVerifiedUser />
                            <p>Verified Sellers</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <MdOutlineVerifiedUser />
                            <p>Verfied Logbook information</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                            <MdOutlineVerifiedUser />
                            <p>Vehicle available for viewing upon reques</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
    <Footer />
    </>
  )
}

export default CarDescription